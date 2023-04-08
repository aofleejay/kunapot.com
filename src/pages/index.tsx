import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
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

const IndexPage: React.FC<IndexPageProps> = (props) => {
  return (
    <Layout>
      <SEO />
      <section className="mx-8 my-16 text-center">
        <h1 className="text-2xl font-bold mb-2">
          <span className="text-primary mr-1">AOFLEEJAY</span>
          <span className="text-ascending">BLOG</span>
        </h1>
        <p>Software development, Book summary, Games.</p>
      </section>
      <Grid>
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
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { ne: true } } }
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
            date(fromNow: true)
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

export default IndexPage
