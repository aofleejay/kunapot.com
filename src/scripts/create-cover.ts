import inquirer from 'inquirer'
import sharp from 'sharp'
import { spawnSync } from 'child_process'
import fs from 'fs'
import os from 'os'
import path from 'path'
import { pathToFileURL } from 'url'

const WIDTH = 1600
const HEIGHT = 900

const blogsDir = path.resolve(__dirname, '../blogs')
const fontsDir = path.resolve(__dirname, '../../node_modules/@fontsource')
const chromePath =
  process.env.CHROME_PATH ||
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

// Glow colours per main tag; the tag itself is not printed on the cover
const palettes: Record<string, [string, string, string]> = {
  เล่าโค้ด: ['#0a84ff', '#5e5ce6', '#64d2ff'],
  เล่าเกม: ['#bf5af2', '#ff375f', '#5e5ce6'],
  เล่าหนังสือ: ['#ff9f0a', '#ff375f', '#ffd60a'],
  เล่าเบียร์: ['#ffb340', '#ff9f0a', '#ffd60a'],
}

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const readFrontmatter = (markdown: string) => {
  const title = markdown.match(/^title:\s*['"](.*)['"]\s*$/m)?.[1] ?? ''
  const tags = (markdown.match(/^tags:\s*\[(.*)\]\s*$/m)?.[1] ?? '')
    .split(',')
    .map((tag) => tag.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean)
  return { title, tags }
}

const fontFace = (family: string, file: string, weight: number) => `
  @font-face {
    font-family: '${family}';
    font-weight: ${weight};
    src: url('${pathToFileURL(path.join(fontsDir, file)).href}') format('woff2');
  }`

const coverHtml = (text: string, tag?: string) => {
  const [glowA, glowB, glowC] = (tag && palettes[tag]) || palettes.เล่าโค้ด
  const length = [...text].length
  const fontSize = length > 70 ? 68 : length > 40 ? 80 : 96
  // Negative tracking suits Google Sans but crowds Thai vowels/tone marks
  const tracking = /[\u0E00-\u0E7F]/.test(text) ? '0' : '-0.02em'

  return `<!doctype html>
<html lang="th">
<head>
<meta charset="utf-8" />
<style>
  ${[500, 600]
    .map(
      (weight) =>
        fontFace(
          'Google Sans',
          `google-sans/files/google-sans-latin-${weight}-normal.woff2`,
          weight,
        ) +
        fontFace(
          'IBM Plex Sans Thai Looped',
          `ibm-plex-sans-thai-looped/files/ibm-plex-sans-thai-looped-thai-${weight}-normal.woff2`,
          weight,
        ),
    )
    .join('')}
  * { margin: 0; box-sizing: border-box; }
  body {
    position: relative;
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    padding: 0 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    background: #f5f5f7;
    color: #1d1d1f;
    font-family: 'Google Sans', 'IBM Plex Sans Thai Looped', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .glow { position: absolute; border-radius: 50%; filter: blur(110px); }
  .glow.a { width: 760px; height: 760px; right: -180px; top: -260px; background: ${glowA}; opacity: 0.55; }
  .glow.b { width: 640px; height: 640px; right: 260px; bottom: -380px; background: ${glowB}; opacity: 0.45; }
  .glow.c { width: 420px; height: 420px; right: -60px; bottom: -120px; background: ${glowC}; opacity: 0.5; }
  .dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(29, 29, 31, 0.13) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
    -webkit-mask-image: linear-gradient(115deg, transparent 35%, #000 100%);
  }
  h1 {
    position: relative;
    max-width: 1150px;
    font-size: ${fontSize}px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: ${tracking};
  }
  .bar {
    position: relative;
    margin-top: 56px;
    width: 120px;
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(90deg, ${glowA}, ${glowB});
  }
</style>
</head>
<body>
  <div class="glow a"></div>
  <div class="glow b"></div>
  <div class="glow c"></div>
  <div class="dots"></div>
  <h1>${escapeHtml(text)}</h1>
  <div class="bar"></div>
</body>
</html>`
}

const createCover = async (slug: string, text?: string) => {
  const postDir = path.join(blogsDir, slug)
  const markdownPath = path.join(postDir, 'index.md')
  const markdown = fs.readFileSync(markdownPath, 'utf8')
  const { title, tags } = readFrontmatter(markdown)

  if (!title) throw new Error(`No title found in ${markdownPath}`)
  if (!fs.existsSync(chromePath)) {
    throw new Error(
      `Chrome not found at "${chromePath}". Set CHROME_PATH to your Chrome/Chromium binary.`,
    )
  }

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cover-'))
  const htmlPath = path.join(tmpDir, 'cover.html')
  const pngPath = path.join(tmpDir, 'cover.png')
  fs.writeFileSync(htmlPath, coverHtml(text?.trim() || title, tags[0]), 'utf8')

  const chrome = spawnSync(chromePath, [
    '--headless=new',
    '--hide-scrollbars',
    `--window-size=${WIDTH},${HEIGHT}`,
    '--virtual-time-budget=3000',
    `--screenshot=${pngPath}`,
    pathToFileURL(htmlPath).href,
  ])
  if (!fs.existsSync(pngPath)) {
    throw new Error(`Chrome failed to render cover:\n${chrome.stderr}`)
  }

  const fileName = `${slug}-cover-image.webp`
  await sharp(pngPath)
    .resize(WIDTH, HEIGHT)
    .webp({ quality: 90 })
    .toFile(path.join(postDir, fileName))
  fs.rmSync(tmpDir, { recursive: true, force: true })

  // Only touch the coverImage line; everything else in the post stays as written
  const coverLine = `coverImage: './${fileName}'`
  const updated = /^#?\s*coverImage:.*$/m.test(markdown)
    ? markdown.replace(/^#?\s*coverImage:.*$/m, coverLine)
    : markdown.replace(/^(date:.*)$/m, `$1\n${coverLine}`)
  fs.writeFileSync(markdownPath, updated, 'utf8')

  console.log(`Created ${path.relative(process.cwd(), postDir)}/${fileName}`)
}

const posts = fs
  .readdirSync(blogsDir)
  .filter((dir) => fs.existsSync(path.join(blogsDir, dir, 'index.md')))
  .sort(
    (a, b) =>
      fs.statSync(path.join(blogsDir, b, 'index.md')).mtimeMs -
      fs.statSync(path.join(blogsDir, a, 'index.md')).mtimeMs,
  )

// Usage: bun cover:create [slug] [cover text]
const [slugArg, textArg] = process.argv.slice(2)

;(slugArg
  ? Promise.resolve({ slug: slugArg, text: textArg })
  : inquirer.prompt([
      {
        type: 'list',
        name: 'slug',
        message: 'Create cover for which post ?',
        choices: posts,
      },
      {
        type: 'input',
        name: 'text',
        message: 'Cover text ? (empty = post title)',
      },
    ])
)
  .then(({ slug, text }) => createCover(slug, text))
  .catch((error) => {
    console.error(error.message ?? error)
    process.exit(1)
  })
