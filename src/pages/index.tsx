import { graphql } from 'gatsby'
import React from 'react'
import { BlogCard, Grid, Layout, SEO } from '../components'

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string
            frontmatter: {
              title: string
              coverImage: {
                name: string
                publicURL: string
              }
              date: string
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

const IndexPage: React.FC<IndexPageProps> = props => {
  return (
    <Layout>
      <SEO />
      <Grid column={3}>
        {props.data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard key={node.id} post={node} />
        ))}
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            coverImage {
              name
              publicURL
            }
            date(formatString: "MMM D, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt(truncate: true, pruneLength: 150)
        }
      }
    }
  }
`

export default IndexPage
