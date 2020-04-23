import React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import { Layout, SEO } from '../components'

interface TagsPageProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string
            frontmatter: {
              title: string
              coverImage: {
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

const TagsPage: React.FC<TagsPageProps> = props => {
  return (
    <Layout>
      <SEO />
      <div
        css={css`
          display: grid;
          max-width: 1400px;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem 4rem;
          padding 4rem 2rem;

          @media only screen and (max-width: 600px) {
            grid-template-columns: 1fr;
            gap: 0;
            padding 2rem 1rem;
          }
        `}
      >
        {props.data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id}>
            <Link to={node.fields.slug}>
              <img
                css={css`
                  border-radius: 4px;
                  margin-bottom: 0;
                `}
                src={node.frontmatter.coverImage.publicURL}
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
                  `}
                >
                  {node.frontmatter.title}
                </p>
                <p
                  css={css`
                    margin-bottom: 1rem;
                    font-size: 0.8rem;
                    color: grey;
                  `}
                >
                  {node.frontmatter.date} - {node.frontmatter.tags.join(',')}
                </p>
                <p>{node.excerpt}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            coverImage {
              name
              publicURL
            }
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt(truncate: true, pruneLength: 150)
        }
      }
    }
  }
`

export default TagsPage
