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
  pageContext: { tag: string }
}

const TagsPage = (props: TagsPageProps) => {
  const posts = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      <header className="mx-auto max-w-6xl px-4 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-16">
        <p className="text-sm font-medium text-ascending">Tag</p>
        <h1 className="mt-2 text-4xl font-semibold leading-snug text-primary sm:text-5xl">
          {props.pageContext.tag}
        </h1>
        <p className="mt-3 text-muted">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'}
        </p>
      </header>
      <Grid>
        {posts.map(({ node }) => (
          <BlogCard key={node.id} post={node} />
        ))}
      </Grid>
    </Layout>
  )
}

interface TagsHeadProps {
  pageContext: { tag: string }
}

export const Head = ({ pageContext }: TagsHeadProps) => (
  <SEO
    title={`${pageContext.tag}`}
    description={`บทความทั้งหมดในหมวด ${pageContext.tag}`}
    slug={`/tags/${pageContext.tag}/`}
  />
)

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
