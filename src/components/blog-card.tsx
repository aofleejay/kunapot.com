import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

type BlogCardProp = {
  post: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      date: string
      tags: string[]
      cover: {
        publicURL: string
        name: string
      }
    }
    excerpt: string
  }
}

const BlogCard = ({ post }: BlogCardProp) => {
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
      <Link
        css={css`
          text-decoration: none;
          color: inherit;
        `}
        to={post.fields.slug}
      >
        {post.frontmatter.cover && (
          <img
            src={post.frontmatter.cover.publicURL}
            alt={post.frontmatter.cover.name}
          />
        )}
        <p>{post.excerpt}</p>
      </Link>
    </div>
  )
}

export default BlogCard
