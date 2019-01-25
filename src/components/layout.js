import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

const Layout = ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <header
      css={css`
        margin-bottom: 1.5rem;
      `}
    >
      <Link to="/">
        Home
      </Link>
      <Link
        to="/about/"
        css={css`
          float: right;
        `}
      >
        About
      </Link>
    </header>
    {children}
  </div>
)

export default Layout
