import React from 'react'
import { Link, graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'
import { Layout, SEO } from '../components'

interface BlogPostProps {
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
          childImageSharp: {
            original: {
              width: number
              height: number
            }
          }
        }
        date: string
      }
      fields: {
        slug: string
      }
      timeToRead: number
    }
    site: {
      siteMetadata: {
        siteUrl: string
        disqus: {
          shortName: string
        }
      }
    }
  }
}

const BlogPost = ({ data }: BlogPostProps) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="max-w-screen-md mx-auto p-4 my-8">
        <h1 className="text-2xl font-bold text-primary mb-4">
          {post.frontmatter.title}
        </h1>
        <p className="mb-4 space-x-4 text-gray-500">
          <span>{post.timeToRead} min read</span>
          <span>•</span>
          <span>{post.frontmatter.date}</span>
        </p>
        <p className="mb-8 space-x-4">
          {post.frontmatter.tags.map((tag) => (
            <Link key={tag} to={`/tags/${tag}`}>
              <span className="bg-ascending rounded-full py-1 px-4 text-white">
                {tag}
              </span>
            </Link>
          ))}
        </p>
        <img
          className="rounded"
          src={
            post.frontmatter.coverImage && post.frontmatter.coverImage.publicURL
          }
          alt={post.frontmatter.coverImage && post.frontmatter.coverImage.name}
        />
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="prose mx-auto my-8"
        />
        <p className="text-center mb-8">. . .</p>
        <DiscussionEmbed
          shortname={data.site.siteMetadata.disqus.shortName}
          config={{
            url: `${data.site.siteMetadata.siteUrl}${post.fields.slug}`,
            identifier: post.fields.slug,
            title: post.frontmatter.title,
          }}
        />
      </div>
    </Layout>
  )
}

export const Head = ({ data }: BlogPostProps) => {
  const post = data.markdownRemark

  return (
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      keywords={post.frontmatter.tags}
      image={
        post.frontmatter.coverImage && post.frontmatter.coverImage.publicURL
      }
      imageWidth={post.frontmatter.coverImage.childImageSharp.original.width}
      imageHeight={post.frontmatter.coverImage.childImageSharp.original.height}
      slug={post.fields.slug}
      article
    />
  )
}

export const query = graphql`
  query ($slug: String!) {
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
          childImageSharp {
            original {
              width
              height
            }
          }
        }
        date(fromNow: true)
      }
      fields {
        slug
      }
      timeToRead
    }
    site {
      siteMetadata {
        siteUrl
        disqus {
          shortName
        }
      }
    }
  }
`

export default BlogPost
