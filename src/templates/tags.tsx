import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogCard from '../components/blog-card'

const TagsPage = ({ data }) => {
  return (
    <Layout>
      <SEO />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogCard key={node.id} post={node} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
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
