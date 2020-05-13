import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import { Layout, SEO } from '../components'

const AboutPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            github
            medium
          }
        }
      }
    }
  `)

  const { github, medium } = data.site.siteMetadata.social

  return (
    <Layout>
      <SEO />
      <div
        css={css`
          padding: 4rem 2rem;
        `}
      >
        <h1>Hi there, I'm Aof.</h1>
        <p>
          I'm a software engineer from Bangkok, Thailand. I write blogs about
          software engineering at{' '}
          <a
            href={medium}
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              color: var(--textPrimary);
            `}
          >
            medium.com/aofleejay
          </a>{' '}
          and also about books, games at{' '}
          <Link
            to="/"
            css={css`
              color: var(--textPrimary);
            `}
          >
            aofleejay.com
          </Link>{' '}
          (this blog).
        </p>
        <p>
          I create open-source libraries e.g.{' '}
          <a
            href={`${github}/express-response-formatter`}
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              color: var(--textPrimary);
            `}
          >
            express-response-formatter
          </a>
          ,{' '}
          <a
            href={`${github}/primis`}
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              color: var(--textPrimary);
            `}
          >
            primis
          </a>
          , and{' '}
          <a
            href={`${github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              color: var(--textPrimary);
            `}
          >
            other stuff here at GitHub
          </a>
          .
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
