import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import {
  BlogCard,
  Grid,
  Layout,
  Pagination,
  SEO,
  pagePath,
} from '../components'

interface BlogListContext {
  limit: number
  skip: number
  currentPage: number
  numPages: number
}

interface BlogListProps {
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
  pageContext: BlogListContext
}

const BlogList = (props: BlogListProps) => {
  const { currentPage, numPages } = props.pageContext
  return (
    <Layout>
      {currentPage === 1 && (
        <section className="mx-auto max-w-6xl px-4 pt-16 pb-12 text-center sm:px-6 sm:pt-24 sm:pb-16">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            <span className="text-primary mr-3">Kunapot</span>
            <span className="text-ascending">BLOG</span>
          </h1>
          <p className="mt-4 text-lg text-muted sm:text-xl">
            Software development, Book summary, Games.
          </p>
        </section>
      )}
      {currentPage > 1 && (
        <header className="mx-auto max-w-6xl px-4 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-16">
          <h1 className="text-4xl font-semibold leading-snug text-primary sm:text-5xl">
            Page {currentPage}
          </h1>
        </header>
      )}
      <Grid>
        {props.data.allMarkdownRemark.edges.map(({ node }, index) => (
          <BlogCard key={node.id} post={node} eager={index === 0} />
        ))}
      </Grid>
      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  )
}

export const Head = ({ pageContext }: BlogListProps) =>
  pageContext.currentPage === 1 ? (
    <SEO />
  ) : (
    <SEO
      title={`Page ${pageContext.currentPage}`}
      slug={pagePath(pageContext.currentPage)}
    />
  )

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { ne: true } } }
      limit: $limit
      skip: $skip
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

export default BlogList
