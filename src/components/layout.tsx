import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

export default ({ children }) => (
  <>
    <div
      css={css`
        background-color: salmon;
      `}
    >
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(1)} ${rhythm(2)};
        `}
      >
        <Link
          css={css`
            color: #ffffff;
            text-decoration: none;
          `}
          to={`/`}
        >
          HOME
        </Link>
        <div
          css={css`
            float: right;
          `}
        >
          <a
            css={css`
              color: #ffffff;
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
              color: #ffffff;
            `}
          >
            |
          </span>
          <Link
            to={`/about/`}
            css={css`
              color: #ffffff;
              text-decoration: none;
            `}
          >
            ABOUT
          </Link>
        </div>
      </div>
    </div>
    <div>
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        {children}
      </div>
    </div>
  </>
)
