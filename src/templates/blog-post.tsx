import React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import { DiscussionEmbed } from 'disqus-react'
import { Layout, SEO } from '../components'

type BlogPostProps = {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        description: string
        tags: string[]
        coverImage: {
          name: string
          publicURL: string
        }
        date: string
      }
      fields: {
        slug: string
      }
    }
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        keywords={post.frontmatter.tags}
        image={
          post.frontmatter.coverImage && post.frontmatter.coverImage.publicURL
        }
        slug={post.fields.slug}
        article
      />
      <div
        css={css`
          max-width: 700px;
          margin: 0 auto;
          padding 4rem 2rem;

          @media only screen and (max-width: 600px) {
            padding 2rem 1rem;
          }
        `}
      >
        <h1>{post.frontmatter.title}</h1>
        <p
          css={css`
            color: #bbb;
          `}
        >
          {post.frontmatter.date}
          <span
            css={css`
              padding: 0 1rem;
            `}
          >
            |
          </span>
          {post.frontmatter.tags.map(tag => (
            <Link
              key={tag}
              to={`/tags/${tag}`}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <span>{tag}</span>
            </Link>
          ))}
        </p>
        <img
          css={css`
            border-radius: 4px;
          `}
          src={
            post.frontmatter.coverImage && post.frontmatter.coverImage.publicURL
          }
          alt={post.frontmatter.coverImage && post.frontmatter.coverImage.name}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <DiscussionEmbed
          shortname={data.site.siteMetadata.title}
          config={{
            url: post.fields.slug,
            identifier: post.fields.slug,
            title: post.frontmatter.title,
          }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { draft: { ne: true } }
    ) {
      html
      frontmatter {
        title
        description
        tags
        coverImage {
          name
          publicURL
        }
        date(formatString: "DD MMMM, YYYY")
      }
      fields {
        slug
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default BlogPost
