import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

type SEOProps = {
  title?: string
  description?: string
  author?: string
  keywords?: string[]
  image?: string
  article?: boolean
  slug?: string
}

const SEO: React.FC<SEOProps> = (props) => {
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
          <Helmet title={title}>
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
            {props.image && (
              <meta
                property="og:image:secure_url"
                content={`${data.site.siteMetadata.siteUrl}${props.image}`}
              />
            )}
            <meta property="og:locale" content="th_TH" />
            <meta
              property="fb:app_id"
              content={data.site.siteMetadata.facebookAppID}
            />
          </Helmet>
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
