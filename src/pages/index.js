import React from 'react'
import { Link, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
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
          </h3>
          <img
            src={node.frontmatter.cover.publicURL}
            alt={node.frontmatter.cover.name}
          />
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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

export default IndexPage
