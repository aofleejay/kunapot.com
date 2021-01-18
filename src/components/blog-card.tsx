import React from 'react'
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
    timeToRead: number
  }
}

const BlogCard: React.FC<BlogCardProp> = ({ post }) => {
  return (
    <article className="flex flex-col overflow-hidden rounded border border-faded transition duration-500 ease-in-out transform hover:-translate-y-2 shadow-md hover:shadow-xl">
      <Link to={post.fields.slug}>
        <img
          className="mb-0"
          src={
            post?.frontmatter?.coverImage?.publicURL ||
            'https://picsum.photos/600/300'
          }
        />
      </Link>
      <div className="flex flex-grow flex-col m-6">
        <span className="space-x-2 mb-2">
          {post.frontmatter.tags.map((tag, i) => (
            <>
              {i > 0 && <span className="text-green-500">•</span>}
              <Link key={tag} to={`/tags/${tag}`}>
                <span className="text-green-500 text-sm">{tag}</span>
              </Link>
            </>
          ))}
        </span>
        <Link to={post.fields.slug}>
          <p className="mb-4 text-lg font-bold text-primary">
            {post.frontmatter.title}
          </p>
        </Link>
        <Link to={post.fields.slug} className="flex-grow">
          <p className="mb-4 text-sm">{post.excerpt}</p>
        </Link>
        <p className="text-xs space-x-2">
          <span>{post.frontmatter.date}</span>
          <span>•</span>
          <span>{post.timeToRead} min read</span>
        </p>
      </div>
    </article>
  )
}

export default BlogCard
