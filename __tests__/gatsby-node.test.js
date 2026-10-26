/**
 * @jest-environment node
 */
const { createPages } = require('../gatsby-node')

const post = (slug, tags) => ({
  node: { fields: { slug }, frontmatter: { title: slug, tags } },
})

const runCreatePages = async (posts) => {
  const createPage = jest.fn()
  const graphql = jest
    .fn()
    .mockResolvedValue({ data: { allMarkdownRemark: { edges: posts } } })
  await createPages({ graphql, actions: { createPage } })
  return createPage.mock.calls.map(([page]) => page)
}

const byTemplate = (pages, name) =>
  pages.filter((page) => page.component.endsWith(name))

describe('createPages', () => {
  it('creates one page per post using its slug', async () => {
    const pages = await runCreatePages([post('/a/', []), post('/b/', [])])
    expect(byTemplate(pages, 'blog-post.tsx').map((p) => p.path)).toEqual([
      '/a/',
      '/b/',
    ])
  })

  it('paginates the home page at 9 posts per page', async () => {
    const posts = Array.from({ length: 19 }, (_, i) => post(`/p${i}/`, []))
    const lists = byTemplate(await runCreatePages(posts), 'blog-list.tsx')

    expect(lists.map((p) => p.path)).toEqual(['/', '/page/2/', '/page/3/'])
    expect(lists.map((p) => p.context)).toEqual([
      { limit: 9, skip: 0, currentPage: 1, numPages: 3 },
      { limit: 9, skip: 9, currentPage: 2, numPages: 3 },
      { limit: 9, skip: 18, currentPage: 3, numPages: 3 },
    ])
  })

  it('creates one page per unique tag', async () => {
    const pages = await runCreatePages([
      post('/a/', ['เล่าเกม', 'Board Game']),
      post('/b/', ['เล่าเกม']),
      post('/c/', null),
    ])
    expect(byTemplate(pages, 'tags.tsx')).toEqual([
      expect.objectContaining({
        path: '/tags/เล่าเกม/',
        context: { tag: 'เล่าเกม' },
      }),
      expect.objectContaining({
        path: '/tags/board-game/',
        context: { tag: 'Board Game' },
      }),
    ])
  })
})
