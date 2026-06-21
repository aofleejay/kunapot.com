# AGENTS.md — kunapot.com

Guide for AI agents working on this repository.

## Project overview

Personal blog at [https://kunapot.com](https://kunapot.com) by **aofleejay**.

| Layer           | Stack                                                      |
| --------------- | ---------------------------------------------------------- |
| Framework       | Gatsby 5 + React 18 + TypeScript (strict)                  |
| Styling         | Tailwind CSS 4 + `@tailwindcss/typography` + CSS variables |
| Hosting         | GitHub Pages (custom domain via `static/CNAME`)            |
| Package manager | Bun 1.3.14                                                 |

- **Content language:** predominantly Thai (blog body); site chrome (nav, footer) is English.
- **Common tags:** `เล่าเกม`, `เล่าหนังสือ`, `เล่าโค้ด`, `เล่าเบียร์`

## Repository map

| Path                         | Role                                          |
| ---------------------------- | --------------------------------------------- |
| `src/blogs/`                 | All markdown posts (one folder per post)      |
| `src/templates/`             | `blog-post.tsx`, `tags.tsx`                   |
| `src/components/`            | Layout, BlogCard, Grid, SEO                   |
| `src/pages/`                 | Static pages: home, about, 404                |
| `src/scripts/`               | `create-blog.ts`, `resize-image.ts`           |
| `src/styles/global.css`      | Tailwind imports + theme CSS variables        |
| `gatsby-node.js`             | Slug generation, page creation (posts + tags) |
| `gatsby-config.js`           | Plugins, site metadata, env loading           |
| `.github/workflows/main.yml` | CI build + deploy to `gh-pages`               |

## Local development

```bash
bun dev          # local preview (gatsby develop)
bun build        # production build → public/
bun serve        # serve built site
bun blog:create  # scaffold new post (interactive)
bun image:resize # resize cover to 1600×900 webp
bun lint         # ESLint on src/
bun format       # Prettier
bun deploy       # manual: build + push public/ to gh-pages
ANALYZE=true bun build  # build with webpack bundle analyser
```

**Environment:** `.env.development` / `.env.production` (gitignored) with `GA4_TAG_ID` for Google Analytics. Loaded in `gatsby-config.js` via `dotenv`.

**Do not commit:** `.env*`, `public/`, `.cache/`, `node_modules/`

## Blog authoring

The most common task. Posts live in `src/blogs/`, never in `src/pages/`.

### Folder structure

```
src/blogs/<slug>/index.md
src/blogs/<slug>/<slug>-cover-image.{jpg|webp|jpeg}
```

- **Slug** = folder name. Thai folder names are valid (e.g. `ทำเบียร์ลาเกอร์`).
- `bun blog:create` uses `kebabCase(title)` for the folder name.

### Frontmatter

```yaml
---
title: 'Post Title'
description: 'SEO summary — required, 1-2 sentences in Thai'
date: '2025-03-05T15:47:16.165Z'
coverImage: './slug-cover-image.jpg'
tags: ['เล่าเบียร์']
draft: false # true = excluded from build
---
```

### Rules

- Set `draft: false` only when ready to publish.
- **`description` is required** — never leave it empty on a published post. Write 1–2 Thai sentences summarising the content. This is used for meta description, og:description, and Twitter card.
- `coverImage` is required for og:image and the hero on the post page.
- Inline images: place in the post folder, reference with relative paths in markdown.
- `bun blog:create` comments out `coverImage` by default and sets `draft: true` by default.
- Draft posts are filtered everywhere via `filter: { frontmatter: { draft: { ne: true } } }` in `gatsby-node.js`.

### Markdown features

Via `gatsby-transformer-remark` plugins:

- Images — max width 700px, webp, quality 75
- Video embeds — `gatsby-remark-embed-video`
- Code highlighting — `gatsby-remark-highlight-code` + `@deckdeckgo/highlight-code`

## SEO standards

All pages use Gatsby 5 `export const Head` pattern with the `SEO` component (`src/components/seo.tsx`).

### What SEO component handles automatically

- `<title>` — `"{Post Title} | kunapot.com"` for posts, `"kunapot.com"` for homepage
- `<meta name="description">` — from frontmatter `description`; fallback to site description
- `<link rel="canonical">` — pass `slug` prop
- Open Graph: `og:title`, `og:description`, `og:image`, `og:type`, `og:locale` (`th_TH`), `og:site_name`
- Twitter Card: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- JSON-LD: `BlogPosting` on posts, `WebSite` on homepage
- Google Fonts (Quicksand + IBM Plex Sans Thai) loaded via `<link rel="preconnect">` — non-blocking

### SEO props reference

| Prop                         | Used by    | Notes                                         |
| ---------------------------- | ---------- | --------------------------------------------- |
| `title`                      | All pages  | Omit on homepage (uses site title)            |
| `description`                | All pages  | Required; 1-2 sentences                       |
| `slug`                       | All pages  | e.g. `/about/`, `/blogs/sekiro/`              |
| `image`                      | Blog posts | `childImageSharp.original.src`                |
| `imageWidth` / `imageHeight` | Blog posts | from `original`                               |
| `article`                    | Blog posts | enables `og:type=article` + article meta      |
| `articleDate`                | Blog posts | ISO date string for `article:published_time`  |
| `articleTags`                | Blog posts | array of tags                                 |
| `noindex`                    | 404        | adds `<meta name="robots" content="noindex">` |
| `keywords`                   | Blog posts | defaults to site keywords                     |

### Checklist before publishing a post

- [ ] `description` filled (not empty)
- [ ] `coverImage` committed to git and path is correct
- [ ] `draft: false` set
- [ ] `tags` has at least one valid tag
- [ ] No bare `#` headings in markdown body (template already has `<h1>`; use `##` and below)

## Code conventions

- **Prettier:** no semicolons, single quotes, trailing commas (`.prettierrc`)
- **ESLint:** flat config in `eslint.config.js` (ESLint 9 + typescript-eslint + react)
- **React:** functional components; Gatsby 5 `export const Head` for SEO (not legacy Helmet)
- **Styling:** Tailwind utility classes; theme colors via CSS variables in `src/styles/global.css` (`text-primary`, `bg-faded`, etc.)
- **Pre-commit:** Prettier only (`pretty-quick --staged`); lint and tests are not in the hook
- **Tests:** Jest is configured but no test files exist — do not assume test coverage

## Performance notes

- **Cover images** on blog post pages use `GatsbyImage` with `gatsbyImageData` (webp, width 768, BLURRED placeholder) — do not replace with plain `<img>` tags.
- **Blog card titles** use `<h2>` — keep as `<h2>` for heading hierarchy.
- **deckDeckGo** (code highlight web component) is initialised inside `blog-post.tsx` via `useEffect` only — not on every page.
- **Disqus** is lazy-loaded via `IntersectionObserver` (loads when user scrolls near comment section).
- **`gatsby-plugin-offline`** is enabled — Service Worker caches site for repeat visitors.
- **Bundle analyser** only runs when `ANALYZE=true bun build` is used — not in production by default.

## Deploy

Push to `master` triggers GitHub Actions (`.github/workflows/main.yml`):

1. `bun install --frozen-lockfile && bun run build` (with `GA4_TAG_ID` secret)
2. Deploy `public/` folder to `gh-pages` branch via `JamesIves/github-pages-deploy-action`
3. Custom domain `kunapot.com` served from `static/CNAME`

Manual fallback: `bun deploy`

## Content ownership

**Blog post body text is written exclusively by the human owner (aofleejay).** AI agents must never generate, rewrite, paraphrase, or fill in blog post content in `src/blogs/*/index.md`.

### What AI can freely change

- All code: components, templates, pages, scripts, config files
- Frontmatter fields other than the body (e.g. fixing `description`, `tags`, `draft`, `coverImage` path) — but only when explicitly asked
- `AGENTS.md`, `README.md`, documentation
- Dependencies, CI config, tooling

### What requires a human

| File / area                                                           | Rule                                                                          |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Body text inside `src/blogs/*/index.md` (below the frontmatter `---`) | **Human only.** Do not write, edit, translate, summarise, or paraphrase.      |
| `description` frontmatter on a new post                               | Human writes it; AI may not invent a description for content it has not read. |
| `src/pages/about.tsx` body copy                                       | Human only — personal bio.                                                    |

### When to warn

If a task requires editing blog post body text (e.g. "fix this paragraph", "translate the post", "add a section about X"), **stop and tell the user** that post content must be written by a human. Do not attempt the edit. Example response:

> "บทความนี้ต้องเขียนโดย aofleejay เอง — ฉันแก้ไขเนื้อหา body ของ blog post ไม่ได้ บอกฉันได้ถ้าอยากให้ช่วยด้านเทคนิคอื่นๆ แทน"

## Agent guidelines

### Do

- Match existing patterns in nearby files
- Keep changes minimal and focused
- Preview with `bun dev` after post or template changes
- Warn immediately if asked to write or edit blog post body content

### Don't

- Commit secrets (`.env*`, tokens)
- Put blog content in `src/pages/`
- Force-push `master` or `gh-pages`
- Create commits unless explicitly asked
- Upgrade Gatsby/plugins without verifying CI still builds with Bun
- Leave `description` empty on published posts
- Use plain `<img>` for cover images — always use `GatsbyImage`
- Write, rewrite, or generate any blog post body text

## Commit standard

This project uses **Conventional Commits**. Every commit message must follow:

```
<type>: <short description>
```

### Types

| Type       | When to use                                               |
| ---------- | --------------------------------------------------------- |
| `feat`     | New feature or new content (new blog post, new component) |
| `fix`      | Bug fix                                                   |
| `refactor` | Code change that is neither a fix nor a feature           |
| `style`    | Formatting, whitespace — no logic change                  |
| `perf`     | Performance improvement                                   |
| `chore`    | Tooling, dependencies, config, CI                         |
| `docs`     | Documentation only (README, AGENTS.md)                    |
| `revert`   | Revert a previous commit                                  |

### Rules

- **Short description** — imperative mood, lowercase, no period. e.g. `feat: add dark mode toggle`
- **One concern per commit** — don't mix unrelated changes
- **Never force-push `master`** or `gh-pages`
- Body and footer are optional; use them for breaking changes or issue references

### Examples

```
feat: add SEO JSON-LD structured data
fix: correct og:image:type for webp covers
chore: migrate from yarn to bun
docs: add commit standard to AGENTS.md
perf: lazy-load disqus via IntersectionObserver
refactor: move deckDeckGo init to blog-post only
```

## Known quirks

1. **Cover images** referenced in frontmatter are often not in git (may exist only locally or on the deployed site).
2. **`src/assets/favicon.png`** is referenced in manifest config but missing from the repo.
3. **`create-blog.ts`** may write `draft` as string `"true"` from inquirer input (not boolean).
4. **Tag URLs:** `gatsby-node.js` creates pages at `/tags/${kebabCase(tag)}/` but some link components use the raw tag string — works for current Thai/kebab tags.
5. **sharp on macOS:** if install fails due to global libvips, run `SHARP_IGNORE_GLOBAL_LIBVIPS=1 bun install`.
6. **ESLint is pinned to v9** — `eslint-plugin-react` does not yet support v10.
7. **Gatsby's built-in ESLint webpack plugin** is disabled in `gatsby-node.js` `onCreateWebpackConfig` — incompatible with ESLint v9. Run `bun lint` manually instead.
