import React from 'react'
import { css } from '@emotion/core'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FaGithubSquare, FaMedium, FaSun, FaMoon, FaHome } from 'react-icons/fa'

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          social {
            github
            medium
          }
        }
      }
    }
  `)

  const {
    author,
    social: { github, medium },
  } = data.site.siteMetadata

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        return (
          <>
            <header
              css={css`
              text-align: right;
              max-width: 1400px;
              padding 2rem;
              border-bottom: solid 1px var(--hr);

              @media only screen and (max-width: 600px) {
                padding 2rem 1rem;
              }
            `}
            >
              <Link
                css={css`
                  margin-left: 1rem;
                `}
                to={'/'}
              >
                <FaHome />
              </Link>
              <a
                href={medium}
                target="_blank"
                rel="noopener noreferrer"
                css={css`
                  margin-left: 1rem;
                `}
              >
                <FaMedium />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                css={css`
                  margin-left: 1rem;
                `}
              >
                <FaGithubSquare />
              </a>
              <span
                onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
                css={css`
                  margin-left: 1rem;
                  cursor: pointer;
                `}
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </span>
            </header>
            <main>{children}</main>
            <footer
              css={css`
              max-width: 1400px;
              padding 2rem;
              border-top: solid 1px var(--hr);

              @media only screen and (max-width: 600px) {
                padding 2rem 1rem;
              }
            `}
            >
              Made by{' '}
              <a href={github} target="_blank" rel="noopener noreferrer">
                {author}
              </a>
              . Build with{' '}
              <a
                href="https://www.gatsbyjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsby
              </a>
              .
            </footer>
          </>
        )
      }}
    </ThemeToggler>
  )
}

export default Layout
