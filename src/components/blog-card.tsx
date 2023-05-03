import React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

interface BlogCardProp {
  post: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      date: string
      tags: string[]
      coverImage: IGatsbyImageData
    }
    excerpt: string
    timeToRead: number
  }
}

const BlogCard = ({ post }: BlogCardProp) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-faded transition duration-500 ease-in-out transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
      <Link to={post.fields.slug}>
        <GatsbyImage
          className="mb-0"
          image={getImage(post.frontmatter.coverImage)!}
          alt=""
        />
      </Link>
      <div className="flex flex-grow flex-col m-6">
        <span className="space-x-2 mb-3">
          {post.frontmatter.tags.map((tag) => (
            <Link
              key={tag}
              to={`/tags/${tag}`}
              className="border border-ascending rounded-full py-1 px-4"
            >
              <span className="text-ascending text-sm">{tag}</span>
            </Link>
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
