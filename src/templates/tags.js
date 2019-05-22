import React from 'react'
import { Link, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'
import Layout from '../components/layout'
import SEO from '../components/seo'

const TagsPage = ({ data }) => {
  return (
    <Layout>
      <SEO />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <h3 style={{ marginBottom: rhythm(1 / 4) }}>
              {node.frontmatter.title}{' '}
              <p style={{ color: '#bbb', fontSize: rhythm(1 / 2) }}>
                {node.frontmatter.date}
              </p>
              {node.frontmatter.tags.map(tag => (
                <Link
                  to={`/tags/${tag}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <span
                    style={{
                      marginRight: 5,
                      color: '#bbb',
                      fontSize: rhythm(1 / 2),
                    }}
                  >
                    {tag}
                  </span>
                </Link>
              ))}
            </h3>
            {node.frontmatter.cover && (
              <img
                src={node.frontmatter.cover.publicURL}
                alt={node.frontmatter.cover.name}
              />
            )}
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
  }
`

export default TagsPage
