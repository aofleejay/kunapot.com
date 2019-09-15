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
                Home
              </Link>
              <a
                css={css`
                  text-decoration: none;
                  margin-left: ${rhythm(0.5)};
                `}
                href="https://medium.com/@aofleejay/latest"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>
              <a
                css={css`
                  text-decoration: none;
                  margin-left: ${rhythm(0.5)};
                `}
                href="https://github.com/aofleejay"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <Link
                to={`/about/`}
                css={css`
                  text-decoration: none;
                  margin-left: ${rhythm(0.5)};
                `}
              >
                About
              </Link>
              <img
                src={theme === 'dark' ? sun : moon}
                css={css`
                  display: inline-block;
                  cursor: pointer;
                  width: 25px;
                  vertical-align: bottom;
                  margin-bottom: 0;
                  margin-left: ${rhythm(0.5)};
                `}
                onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
              />
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
}
