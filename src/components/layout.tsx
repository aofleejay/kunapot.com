import React from 'react'
import { css } from '@emotion/core'
import { Link, graphql, StaticQuery } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FaGithubSquare, FaMedium, FaSun, FaMoon, FaHome } from 'react-icons/fa'

import { rhythm } from '../utils/typography'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => {
        const { github, medium } = data.site.siteMetadata.social
        return (
          <ThemeToggler>
            {({ theme, toggleTheme }) => {
              return (
                <>
                  <div
                    css={css`
                      margin: 0 auto;
                      max-width: 700px;
                      padding: ${rhythm(1)};
                      text-align: right;
                    `}
                  >
                    <Link
                      css={css`
                        text-decoration: none;
                        margin-left: ${rhythm(0.5)};
                      `}
                      to={`/`}
                    >
                      <FaHome size={20} />
                    </Link>
                    <a
                      css={css`
                        text-decoration: none;
                        margin-left: ${rhythm(0.5)};
                      `}
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithubSquare size={20} />
                    </a>
                    <a
                      css={css`
                        text-decoration: none;
                        margin-left: ${rhythm(0.5)};
                      `}
                      href={medium}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaMedium size={20} />
                    </a>
                    <a
                      css={css`
                        text-decoration: none;
                        cursor: pointer;
                        margin-left: ${rhythm(0.5)};
                      `}
                      onClick={e => {
                        e.preventDefault()
                        toggleTheme(theme === 'dark' ? 'light' : 'dark')
                      }}
                    >
                      {theme === 'dark' ? (
                        <FaSun size={20} />
                      ) : (
                        <FaMoon size={20} />
                      )}
                    </a>
                  </div>
                  <div
                    css={css`
                      margin: 0 auto;
                      max-width: 700px;
                      padding: ${rhythm(2)} ${rhythm(1)};
                    `}
                  >
                    {children}
                  </div>
                </>
              )
            }}
          </ThemeToggler>
        )
      }}
    />
  )
}

export default Layout
