import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

interface SEOProps {
  title?: string
  description?: string
  author?: string
  keywords?: string[]
  image?: string
  imageWidth?: number
  imageHeight?: number
  article?: boolean
  articleDate?: string
  articleTags?: string[]
  slug?: string
  noindex?: boolean
}

const SEO = (props: SEOProps) => {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const siteTitle = data.site.siteMetadata.title
        const siteDescription = data.site.siteMetadata.description
        const siteUrl = data.site.siteMetadata.siteUrl
        const author = props.author || data.site.siteMetadata.author
        const keywords = props.keywords || data.site.siteMetadata.keywords
        const slug = props.slug || '/'

        const title = props.title ? `${props.title} | ${siteTitle}` : siteTitle
        const description = props.description || siteDescription
        const canonical = `${siteUrl}${slug}`
        const ogImage = props.image ? `${siteUrl}${props.image}` : null

        const jsonLd = props.article
          ? {
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: props.title,
              description: description,
              image: ogImage,
              datePublished: props.articleDate,
              author: {
                '@type': 'Person',
                name: author,
                url: `${siteUrl}/about`,
              },
              publisher: {
                '@type': 'Person',
                name: author,
                url: siteUrl,
              },
              mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
            }
          : {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: siteTitle,
              url: siteUrl,
              description: siteDescription,
            }

        return (
          <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content={author} />
            <meta name="keywords" content={keywords.join()} />
            {props.noindex && (
              <meta name="robots" content="noindex, nofollow" />
            )}

            <link rel="canonical" href={canonical} />

            {/* Open Graph */}
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:locale" content="th_TH" />
            {props.article ? (
              <meta property="og:type" content="article" />
            ) : (
              <meta property="og:type" content="website" />
            )}
            {ogImage && <meta property="og:image" content={ogImage} />}
            {ogImage && (
              <meta
                property="og:image:type"
                content={
                  ogImage.endsWith('.webp') ? 'image/webp' : 'image/jpeg'
                }
              />
            )}
            {props.imageWidth && (
              <meta property="og:image:width" content={`${props.imageWidth}`} />
            )}
            {props.imageHeight && (
              <meta
                property="og:image:height"
                content={`${props.imageHeight}`}
              />
            )}
            <meta
              property="fb:app_id"
              content={data.site.siteMetadata.facebookAppID}
            />

            {/* Article tags */}
            {props.article && props.articleDate && (
              <meta
                property="article:published_time"
                content={props.articleDate}
              />
            )}
            {props.article && (
              <meta property="article:author" content={author} />
            )}
            {props.articleTags?.map((tag) => (
              <meta key={tag} property="article:tag" content={tag} />
            ))}

            {/* Twitter Card */}
            <meta
              name="twitter:card"
              content={ogImage ? 'summary_large_image' : 'summary'}
            />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}
            <meta name="twitter:creator" content={`@${author}`} />

            {/* JSON-LD */}
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
          </>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  title: null,
  description: null,
  author: null,
  keywords: null,
  image: null,
  article: false,
  articleDate: null,
  articleTags: null,
  slug: null,
  noindex: false,
}

export const query = graphql`
  query getSiteMetadata {
    site {
      siteMetadata {
        title
        description
        author
        keywords
        siteUrl
        facebookAppID
      }
    }
  }
`

export default SEO
