import React, { useContext } from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'
import themeContext, { themeColor } from '../context/theme'

export default ({ children }) => {
  const theme = useContext(themeContext)

  return (
    <>
      <div
        css={css`
          background-color: ${themeColor[theme].secondary};
        `}
      >
        <div
          css={css`
            margin: 0 auto;
            max-width: 700px;
            padding: ${rhythm(1)};
          `}
        >
          <Link
            css={css`
              color: ${themeColor[theme].primary};
              text-decoration: none;
            `}
            to={`/`}
          >
            HOME
          </Link>
          <div
            css={css`
              float: right;

              @media only screen and (max-width: 320px) {
                float: none;
              }
            `}
          >
            <a
              css={css`
                color: ${themeColor[theme].primary};
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
                color: ${themeColor[theme].primary};
              `}
            >
              |
            </span>
            <Link
              to={`/about/`}
              css={css`
                color: ${themeColor[theme].primary};
                text-decoration: none;
              `}
            >
              ABOUT
            </Link>
          </div>
        </div>
      </div>
      <div
        css={css`
          color: ${themeColor[theme].secondary};
          background-color: ${themeColor[theme].primary};
        `}
      >
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
}
