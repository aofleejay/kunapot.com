import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

const ListLink = ({ to, children }) => (
  <li
    css={css`
      display: inline-block;
      margin-right: 1rem;
    `}
  >
    <Link to={to}>{children}</Link>
  </li>
)

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
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          Home
        </h3>
      </Link>
      <ul
        css={css`
          list-style: none;
          float: right;
        `}
      >
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)

export default Layout
