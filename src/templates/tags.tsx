import React from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
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
              coverImage: IGatsbyImageData
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

const TagsPage = (props: TagsPageProps) => {
  return (
    <Layout>
      <Grid>
        {props.data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard key={node.id} post={node} />
        ))}
      </Grid>
    </Layout>
  )
}

export const Head = () => <SEO />

export const query = graphql`
  query ($tag: String!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            coverImage {
              childImageSharp {
                gatsbyImageData
              }
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
