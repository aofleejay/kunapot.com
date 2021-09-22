import React from 'react'
import { graphql } from 'gatsby'
import { BlogCard, Grid, Layout, SEO } from '../components'

interface TagsPageProps {
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
            timeToRead: number
          }
        },
      ]
    }
  }
}

const TagsPage: React.FC<TagsPageProps> = (props) => {
  return (
    <Layout>
      <SEO />
      <Grid>
        {props.data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard key={node.id} post={node} />
        ))}
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query ($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
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
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt(truncate: true, pruneLength: 150)
          timeToRead
        }
      }
    }
  }
`

export default TagsPage
