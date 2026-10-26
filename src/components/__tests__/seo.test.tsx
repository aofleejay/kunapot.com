import React from 'react'
import { render } from '@testing-library/react'
import { StaticQuery } from 'gatsby'
import SEO from '../seo'

const siteMetadata = {
  title: 'kunapot.com',
  description: 'Site description',
  author: 'aofleejay',
  keywords: ['blog', 'thai'],
  siteUrl: 'https://kunapot.com',
  facebookAppID: '123',
}

beforeEach(() => {
  ;(StaticQuery as unknown as jest.Mock).mockImplementation(
    ({ render }: { render: (data: unknown) => React.ReactNode }) =>
      render({ site: { siteMetadata } }),
  )
})

const meta = (attr: 'name' | 'property', key: string) =>
  document.querySelector(`meta[${attr}="${key}"]`)?.getAttribute('content')

const jsonLd = () =>
  JSON.parse(
    document.querySelector('script[type="application/ld+json"]')!
      .textContent as string,
  )

describe('SEO', () => {
  it('falls back to site metadata on the home page', () => {
    render(<SEO />)
    expect(document.title).toBe('kunapot.com')
    expect(meta('name', 'description')).toBe('Site description')
    expect(meta('property', 'og:type')).toBe('website')
    expect(meta('property', 'og:image')).toBeUndefined()
    expect(meta('name', 'twitter:card')).toBe('summary')
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    ).toBe('https://kunapot.com/')
    expect(jsonLd()['@type']).toBe('WebSite')
  })

  it('renders article metadata for a blog post', () => {
    render(
      <SEO
        title="Sekiro"
        description="Post description"
        slug="/sekiro/"
        image="/static/cover.webp"
        imageWidth={1600}
        imageHeight={900}
        article
        articleDate="2025-03-05T15:47:16.165Z"
        articleTags={['เล่าเกม']}
      />,
    )
    expect(document.title).toBe('Sekiro | kunapot.com')
    expect(meta('name', 'description')).toBe('Post description')
    expect(meta('property', 'og:type')).toBe('article')
    expect(meta('property', 'og:url')).toBe('https://kunapot.com/sekiro/')
    expect(meta('property', 'og:image')).toBe(
      'https://kunapot.com/static/cover.webp',
    )
    expect(meta('property', 'og:image:type')).toBe('image/webp')
    expect(meta('property', 'og:image:width')).toBe('1600')
    expect(meta('property', 'article:published_time')).toBe(
      '2025-03-05T15:47:16.165Z',
    )
    expect(meta('property', 'article:tag')).toBe('เล่าเกม')
    expect(meta('name', 'twitter:card')).toBe('summary_large_image')

    const ld = jsonLd()
    expect(ld['@type']).toBe('BlogPosting')
    expect(ld.headline).toBe('Sekiro')
    expect(ld.mainEntityOfPage['@id']).toBe('https://kunapot.com/sekiro/')
  })

  it('uses image/jpeg for non-webp covers', () => {
    render(<SEO image="/static/cover.jpg" />)
    expect(meta('property', 'og:image:type')).toBe('image/jpeg')
  })

  it('adds a robots noindex tag when requested', () => {
    render(<SEO noindex />)
    expect(meta('name', 'robots')).toBe('noindex, nofollow')
  })
})
