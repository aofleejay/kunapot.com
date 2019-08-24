import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogCard from '../components/BlogCard'

interface AllMarkdownProps {
  data: {
    allMarkdownRemark: {
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
  }
}

const IndexPage = (props: AllMarkdownProps) => (
  <Layout>
    <SEO />
    {props.data.allMarkdownRemark.edges.map(({ node }) => (
      <BlogCard post={node} />
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

export default IndexPage
