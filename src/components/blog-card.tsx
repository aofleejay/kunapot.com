import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import defaultCoverImage from '../assets/default-cover-image.jpg'

type BlogCardProp = {
  post: {
    id: string
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
    <article>
      <Link to={post.fields.slug}>
        <img
          css={css`
            border-radius: 4px;
            margin-bottom: 0;
          `}
          src={post.frontmatter.coverImage.publicURL}
        />
        <div
          css={css`
            display: grid;
            gap: 0 1rem;
          `}
        >
          <p
            css={css`
              margin-bottom: 0;
              font-size: 1.2rem;
              font-weight: bold;
              color: var(--textPrimary);
            `}
          >
            {post.frontmatter.title}
          </p>
          <p
            css={css`
              margin-bottom: 1rem;
              color: var(--textTertiary);
            `}
          >
            {post.frontmatter.date} - {post.frontmatter.tags.join(',')}
          </p>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </article>
  )
}

export default BlogCard
