import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { rhythm } from '../utils/typography'
import moon from '../assets/moon.svg'
import sun from '../assets/cloudy.svg'

export default ({ children }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        return (
          <>
            <div css={css``}>
              <div
                css={css`
                  margin: 0 auto;
                  max-width: 700px;
                  padding: ${rhythm(1)};
                `}
              >
                <Link
                  css={css`
                    text-decoration: none;
                  `}
                  to={`/`}
                >
                  HOME
                </Link>
                <span
                  css={css`
                    padding: 0 ${rhythm(0.5)};
                  `}
                >
                  |
                </span>
                <a
                  css={css`
                    text-decoration: none;
                  `}
                  href="https://medium.com/@aofleejay/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SOFTWARE DEVELOPMENT
                </a>
                <span
                  css={css`
                    padding: 0 ${rhythm(0.5)};
                  `}
                >
                  |
                </span>
                <Link
                  to={`/about/`}
                  css={css`
                    text-decoration: none;
                  `}
                >
                  ABOUT
                </Link>
                <span
                  css={css`
                    padding: 0 ${rhythm(0.5)};
                  `}
                >
                  |
                </span>
                <img
                  src={theme === 'dark' ? sun : moon}
                  css={css`
                    display: inline-block;
                    cursor: pointer;
                    width: 25px;
                    vertical-align: bottom;
                    margin-bottom: 0;
                  `}
                  onClick={() =>
                    toggleTheme(theme === 'dark' ? 'light' : 'dark')
                  }
                />
              </div>
            </div>
            <div css={css``}>
              <div
                css={css`
                  margin: 0 auto;
                  max-width: 700px;
                  padding: ${rhythm(2)} ${rhythm(1)};
                `}
              >
                {children}
              </div>
            </div>
          </>
        )
      }}
    </ThemeToggler>
  )
}
