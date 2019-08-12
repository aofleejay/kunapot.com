import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        keywords={post.frontmatter.tags}
        image={post.frontmatter.cover.publicURL}
        slug={post.fields.slug}
        article
      />
      <div>
        <h1>{post.frontmatter.title}</h1>
        {post.frontmatter.cover && (
          <img
            src={post.frontmatter.cover.publicURL}
            alt={post.frontmatter.cover.name}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        tags
        cover {
          name
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
`

export default BlogPost
