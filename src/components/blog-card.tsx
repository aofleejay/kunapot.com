import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'
import defaultCoverImage from '../assets/default-cover-image.jpg'

type BlogCardProp = {
  post: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      date: string
      tags: string[]
      coverImage: {
        publicURL: string
        name: string
      }
    }
    excerpt: string
  }
}

const BlogCard: React.FC<BlogCardProp> = ({ post }) => {
  return (
    <div
      css={css`
        margin-bottom: ${rhythm(2)};
      `}
    >
      <Link
        css={css`
          text-decoration: none;
          color: inherit;
        `}
        to={post.fields.slug}
      >
        <h1
          css={css`
            margin-bottom: ${rhythm(1 / 2)};
          `}
        >
          {post.frontmatter.title}
        </h1>
      </Link>
      <p
        css={css`
          color: #bbb;
        `}
      >
        {post.frontmatter.date}
        <span
          css={css`
            padding: 0 ${rhythm(1 / 2)};
          `}
        >
          |
        </span>
        {post.frontmatter.tags
          .map<React.ReactNode>(tag => (
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
          ))
          .reduce((prev, curr) => [prev, ', ', curr])}
      </p>
      <Link
        css={css`
          text-decoration: none;
          color: inherit;
        `}
        to={post.fields.slug}
      >
        <img
          src={
            post.frontmatter.coverImage
              ? post.frontmatter.coverImage.publicURL
              : defaultCoverImage
          }
          alt={post.frontmatter.coverImage && post.frontmatter.coverImage.name}
        />
        <p>{post.excerpt}</p>
      </Link>
    </div>
  )
}

export default BlogCard
