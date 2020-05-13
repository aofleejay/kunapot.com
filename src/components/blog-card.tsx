import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

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
    <article
      css={css`
        box-shadow: 0 4px 8px 2px var(--shadow);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      `}
    >
      <Link to={post.fields.slug}>
        <img
          css={css`
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            margin-bottom: 0;
          `}
          src={post.frontmatter.coverImage.publicURL}
        />
      </Link>
      <div
        css={css`
          display: grid;
          padding: 1rem 1.5rem;
        `}
      >
        <Link to={post.fields.slug}>
          <p
            css={css`
              margin-bottom: 0.3rem;
              font-size: 1.2rem;
              font-weight: bold;
              color: var(--textPrimary);
            `}
          >
            {post.frontmatter.title}
          </p>
        </Link>
        <p
          css={css`
            margin-bottom: 0.6rem;
            font-size: 0.8rem;
          `}
        >
          {post.frontmatter.date}
        </p>
        <Link to={post.fields.slug}>
          <p
            css={css`
              font-size: 0.8rem;
              color: var(--textTertiary);
              margin-bottom: 0.6rem;
            `}
          >
            {post.excerpt}
          </p>
        </Link>
        <p
          css={css`
            display: flex;
            justify-content: space-between;
            font-size: 0.8rem;
          `}
        >
          <Link to={post.fields.slug}>
            <span>Read more...</span>
          </Link>
          <span>
            {post.frontmatter.tags.map(tag => (
              <Link key={tag} to={`/tags/${tag}`}>
                <span
                  css={css`
                    background-color: var(--fadeBg);
                    border-radius: 4px;
                    padding: 2px 4px;
                    margin-left: 2px;
                    margin-right: 2px;
                  `}
                >
                  {tag}
                </span>
              </Link>
            ))}
          </span>
        </p>
      </div>
    </article>
  )
}

export default BlogCard
