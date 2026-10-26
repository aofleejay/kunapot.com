# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

The full project guide lives in `AGENTS.md` (shared with other AI agents) and is imported here — keep it as the single source of truth and update it rather than duplicating content in this file.

@AGENTS.md

## Additions for Claude Code

- **Tests:** `bun run test` (Jest, `--passWithNoTests`). Single file: `bun run test -- path/to/file.test.tsx`; by name: `bun run test -- -t "name"`. Jest picks up `__tests__/` dirs and `*.test|spec.[jt]sx?`; CSS and media imports are mocked via `identity-obj-proxy` and `__mocks__/file-mock.js`; `loadershim.js` stubs Gatsby's `___loader`.
- **Lint scope:** `bun lint` checks `src` and the root `gatsby-*.js` files.
- Use `bun run build` / `bun run test` (not `bun build` / `bun test`) when there is any ambiguity — the bare forms invoke Bun's built-in bundler and test runner, not the package.json scripts.
- **Content ownership is strict:** never write or edit blog body text, `title`, or `description` in `src/blogs/*/index.md`, or the bio in `src/pages/about.tsx` — see "Content ownership" in `AGENTS.md`.
