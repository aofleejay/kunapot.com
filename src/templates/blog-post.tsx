import React, { useEffect, useRef, useState } from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { DiscussionEmbed } from 'disqus-react'
import { BackToTop, Layout, SEO } from '../components'

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
      <article className="px-4 pt-12 sm:px-6 sm:pt-20">
        <header className="mx-auto max-w-[680px]">
          <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm font-semibold">
            {post.frontmatter.tags.map((tag) => (
              <Link
                key={tag}
                to={`/tags/${tag}`}
                className="text-ascending hover:underline underline-offset-2"
              >
                {tag}
              </Link>
            ))}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-snug text-primary sm:text-[2.75rem] sm:leading-[1.3]">
            {post.frontmatter.title}
          </h1>
          <p className="mt-5 space-x-2 text-sm text-muted">
            <time dateTime={post.frontmatter.dateISO}>
              {post.frontmatter.date}
            </time>
            <span aria-hidden="true">·</span>
            <span>{post.timeToRead} min read</span>
          </p>
        </header>
        <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
          {image ? (
            <GatsbyImage
              className="isolate overflow-hidden rounded-2xl sm:rounded-3xl"
              image={image}
              alt={post.frontmatter.title}
              loading="eager"
              fetchPriority="high"
            />
          ) : (
            coverImage?.publicURL && (
              <img
                className="w-full rounded-2xl sm:rounded-3xl"
                src={coverImage.publicURL}
                alt={post.frontmatter.title}
                loading="lazy"
                decoding="async"
              />
            )
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="prose mx-auto mt-10 max-w-[680px] sm:mt-14"
        />
        <p className="mx-auto my-16 max-w-[680px] text-center tracking-[0.5em] text-muted">
          . . .
        </p>
        <div ref={commentRef} className="mx-auto max-w-[680px]">
          {showComments && (
            <DisqusEmbed
              shortName={data.site.siteMetadata.disqus.shortName}
              siteUrl={data.site.siteMetadata.siteUrl}
              slug={post.fields.slug}
              title={post.frontmatter.title}
            />
          )}
        </div>
      </article>
      <BackToTop />
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
