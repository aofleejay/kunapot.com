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
  slug?: string
}

const SEO = (props: SEOProps) => {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const title = props.title || data.site.siteMetadata.title
        const description = props.description || data.site.siteMetadata.title
        const author = props.author || data.site.siteMetadata.author
        const keywords = props.keywords || data.site.siteMetadata.keywords
        const slug = props.slug || '/'

        return (
          <>
            <meta name="description" content={description} />
            <meta name="author" content={author} />
            <meta name="keywords" content={keywords.join()} />

            <meta
              property="og:url"
              content={`${data.site.siteMetadata.siteUrl}${slug}`}
            />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {props.article && <meta property="og:type" content="article" />}
            {props.image && (
              <meta
                property="og:image"
                content={`${data.site.siteMetadata.siteUrl}${props.image}`}
              />
            )}
            {/* {props.image && (
              <meta
                property="og:image:secure_url"
                content={`${data.site.siteMetadata.siteUrl}${props.image}`}
              />
            )} */}
            {/* {props.image && (
              <meta property="og:image:type" content="image/jpeg" />
            )} */}
            {props.imageWidth && (
              <meta property="og:image:width" content={`${props.imageWidth}`} />
            )}
            {props.imageHeight && (
              <meta
                property="og:image:height"
                content={`${props.imageHeight}`}
              />
            )}
            <meta property="og:locale" content="th_TH" />
            <meta
              property="fb:app_id"
              content={data.site.siteMetadata.facebookAppID}
            />
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
  slug: null,
}

export const query = graphql`
  query getSiteMetadata {
    site {
      siteMetadata {
        title
        author
        keywords
        siteUrl
        facebookAppID
      }
    }
  }
`

export default SEO
