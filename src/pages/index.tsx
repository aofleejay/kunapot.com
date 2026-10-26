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

const IndexPage = (props: IndexPageProps) => {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12 text-center sm:px-6 sm:pt-24 sm:pb-16">
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          <span className="text-primary mr-3">Kunapot</span>
          <span className="text-ascending">BLOG</span>
        </h1>
        <p className="mt-4 text-lg text-muted sm:text-xl">
          Software development, Book summary, Games.
        </p>
      </section>
      <Grid>
        {props.data.allMarkdownRemark.edges.map(({ node }, index) => (
          <BlogCard key={node.id} post={node} eager={index === 0} />
        ))}
      </Grid>
    </Layout>
  )
}

export const Head = () => <SEO />

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
