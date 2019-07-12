import { css } from '@emotion/core'
import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

interface AllMarkdownProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string
            frontmatter: {
              title: string
              cover: {
                name: string
                publicURL: string
              }
              date: Date
              tags: [string]
            }
            fields: {
              slug: string
            }
            excerpt: string
          }
        },
      ]
    }
  }
}

const IndexPage = (props: AllMarkdownProps) => (
  <Layout>
    <SEO />
    {props.data.allMarkdownRemark.edges.map(({ node }) => (
      <div
        key={node.id}
        css={css`
          margin-bottom: ${rhythm(2)};
        `}
      >
        <Link
          css={css`
            text-decoration: none;
            color: inherit;
          `}
          to={node.fields.slug}
        >
          <h1
            css={css`
              margin-bottom: ${rhythm(1 / 2)};
            `}
          >
            {node.frontmatter.title}
          </h1>
        </Link>
        <p
          css={css`
            color: #bbb;
          `}
        >
          {node.frontmatter.date}
          <span
            css={css`
              padding: 0 ${rhythm(1 / 2)};
            `}
          >
            |
          </span>
          {node.frontmatter.tags.map(tag => (
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
          to={node.fields.slug}
        >
          {node.frontmatter.cover && (
            <img
              src={node.frontmatter.cover.publicURL}
              alt={node.frontmatter.cover.name}
            />
          )}
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            cover {
              name
              publicURL
            }
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt(truncate: true, pruneLength: 250)
        }
      }
    }
  }
`

export default IndexPage
