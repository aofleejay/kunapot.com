import { graphql, Link } from 'gatsby'
import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import SEO from '../components/seo'

interface AllMarkdownProps {
  data: {
    books: {
      edges: [
        {
          node: {
            id: string
            frontmatter: {
              title: string
              cover: {
                name: string
                publicURL: string
              }
              thumbnail: {
                name: string
                publicURL: string
              }
              date: Date
              tags: [string]
            }
            fields: {
              slug: string
            }
            excerpt: string
          }
        },
      ]
    }
    mediumBlogs: {
      nodes: [
        {
          id: string
          date: string
          title: string
          link: string
        },
      ]
    }
    site: {
      siteMetadata: {
        social: {
          medium: string
        }
      }
    }
  }
}

const IndexPage = (props: AllMarkdownProps) => {
  return (
    <Layout>
      <SEO />
      <section>
        <h1>Books I've read.</h1>
        <div
          css={css`
            display: flex;
          `}
        >
          {props.data.books.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                css={css`
                  width: 120px;
                  margin-right: 10px;
                `}
              >
                <Link to={node.fields.slug}>
                  <img
                    src={node.frontmatter.thumbnail.publicURL}
                    css={css`
                      border: 1px darkgrey solid;
                    `}
                  />
                </Link>
              </div>
            )
          })}
        </div>
      </section>
      <section>
        <h1>Blogs I've written.</h1>
        {props.data.mediumBlogs.nodes.map(blog => {
          return (
            <a
              key={blog.id}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                {blog.title} - {blog.date}
              </p>
            </a>
          )
        })}
        <a
          href={props.data.site.siteMetadata.social.medium}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>see more</p>
        </a>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    books: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { eq: "เล่าหนังสือ" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            cover {
              name
              publicURL
            }
            thumbnail {
              name
              publicURL
            }
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt(truncate: true, pruneLength: 250)
        }
      }
    }
    mediumBlogs: allMediumFeed {
      nodes {
        id
        date(fromNow: true)
        title
        link
      }
    }
    site {
      siteMetadata {
        social {
          medium
        }
      }
    }
  }
`

export default IndexPage
