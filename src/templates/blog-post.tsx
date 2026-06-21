import React, { useEffect, useRef, useState } from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
            gatsbyImageData: object
            original: {
              src: string
              width: number
              height: number
            }
          }
        }
        date: string
        dateISO: string
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
  const coverImage = post.frontmatter.coverImage
  const image = coverImage
    ? getImage(coverImage.childImageSharp.gatsbyImageData as never)
    : null

  const commentRef = useRef<HTMLDivElement>(null)
  const [showComments, setShowComments] = useState(false)

  useEffect(() => {
    // Load deckDeckGo highlight code only on post pages
    import('@deckdeckgo/highlight-code/dist/loader').then(
      ({ defineCustomElements }) => defineCustomElements(),
    )

    // Lazy-load Disqus when comment section scrolls into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowComments(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    if (commentRef.current) observer.observe(commentRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Layout>
      <div className="max-w-screen-md mx-auto p-4 my-8">
        <h1 className="text-2xl font-bold text-primary mb-4">
          {post.frontmatter.title}
        </h1>
        <p className="mb-4 space-x-4 text-gray-500">
          <span>{post.timeToRead} min read</span>
          <span>•</span>
          <time dateTime={post.frontmatter.dateISO}>
            {post.frontmatter.date}
          </time>
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
        {image ? (
          <GatsbyImage
            className="rounded"
            image={image}
            alt={post.frontmatter.title}
          />
        ) : (
          coverImage?.publicURL && (
            <img
              className="rounded"
              src={coverImage.publicURL}
              alt={post.frontmatter.title}
              loading="lazy"
              decoding="async"
            />
          )
        )}
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="prose mx-auto my-8"
        />
        <p className="text-center mb-8">. . .</p>
        <div ref={commentRef}>
          {showComments && (
            <DisqusEmbed
              shortName={data.site.siteMetadata.disqus.shortName}
              siteUrl={data.site.siteMetadata.siteUrl}
              slug={post.fields.slug}
              title={post.frontmatter.title}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

const DisqusEmbed = ({
  shortName,
  siteUrl,
  slug,
  title,
}: {
  shortName: string
  siteUrl: string
  slug: string
  title: string
}) => (
  <DiscussionEmbed
    shortname={shortName}
    config={{
      url: `${siteUrl}${slug}`,
      identifier: slug,
      title,
    }}
  />
)

export const Head = ({ data }: BlogPostProps) => {
  const post = data.markdownRemark
  const cover = post.frontmatter.coverImage

  return (
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      keywords={post.frontmatter.tags}
      image={cover?.childImageSharp?.original?.src}
      imageWidth={cover?.childImageSharp?.original?.width}
      imageHeight={cover?.childImageSharp?.original?.height}
      slug={post.fields.slug}
      article
      articleDate={post.frontmatter.dateISO}
      articleTags={post.frontmatter.tags}
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
            gatsbyImageData(
              width: 768
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
            original {
              src
              width
              height
            }
          }
        }
        date(formatString: "D MMMM YYYY")
        dateISO: date
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
