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
    <article className="group isolate flex flex-col overflow-hidden rounded-3xl border border-line bg-faded transition duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
      <Link to={post.fields.slug} className="block overflow-hidden">
        <GatsbyImage
          className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          image={getImage(post.frontmatter.coverImage)!}
          alt={post.frontmatter.title}
          sizes="(min-width: 1152px) 346px, (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 640px) calc((100vw - 80px) / 2), calc(100vw - 32px)"
        />
      </Link>
      <div className="flex flex-grow flex-col p-6">
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium">
          {post.frontmatter.tags.map((tag) => (
            <Link
              key={tag}
              to={`/tags/${tag}`}
              className="text-ascending hover:underline underline-offset-2"
            >
              {tag}
            </Link>
          ))}
        </div>
        <Link to={post.fields.slug} className="mt-2 flex flex-grow flex-col">
          <h2 className="text-xl font-semibold leading-snug text-primary transition-colors duration-300 group-hover:text-ascending">
            {post.frontmatter.title}
          </h2>
          <p className="mt-2 line-clamp-3 flex-grow text-[15px] leading-relaxed text-muted">
            {post.excerpt}
          </p>
        </Link>
        <p className="mt-4 space-x-2 text-xs text-muted">
          <span>{post.frontmatter.date}</span>
          <span aria-hidden="true">·</span>
          <span>{post.timeToRead} min read</span>
        </p>
      </div>
    </article>
  )
}

export default BlogCard
