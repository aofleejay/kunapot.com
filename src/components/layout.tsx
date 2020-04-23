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
                border-bottom: solid 1px var(--hr);
              `}
            >
              <nav
                css={css`
                  max-width: 1400px;
                  margin: 0 auto;
                  text-align: right;
                  padding 2rem;

                  @media only screen and (max-width: 600px) {
                    padding 2rem 1rem;
                  }
                `}
              >
                <Link
                  css={css`
                    margin-left: 1rem;
                    color: var(--textPrimary);
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
                    color: var(--textPrimary);
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
                    color: var(--textPrimary);
                  `}
                >
                  <FaGithubSquare />
                </a>
                <span
                  onClick={() =>
                    toggleTheme(theme === 'dark' ? 'light' : 'dark')
                  }
                  css={css`
                    margin-left: 1rem;
                    color: var(--textPrimary);
                    cursor: pointer;
                  `}
                >
                  {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </span>
              </nav>
            </header>
            <main
              css={css`
                max-width: 1400px;
                margin: 0 auto;
              `}
            >
              {children}
            </main>
            <footer
              css={css`
                border-top: solid 1px var(--hr);
              `}
            >
              <div
                css={css`
                  max-width: 1400px;
                  margin: 0 auto;
                  padding 2rem;

                  @media only screen and (max-width: 600px) {
                    padding 2rem 1rem;
                  }
                `}
              >
                Made by{' '}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  css={css`
                    color: var(--textPrimary);
                  `}
                >
                  {author}
                </a>
                . Build with{' '}
                <a
                  href="https://www.gatsbyjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  css={css`
                    color: var(--textPrimary);
                  `}
                >
                  Gatsby
                </a>
                .
              </div>
            </footer>
          </>
        )
      }}
    </ThemeToggler>
  )
}

export default Layout
