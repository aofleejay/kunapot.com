import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

const Layout = ({ children }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 700,
      padding: rhythm(2),
      paddingTop: rhythm(1.5),
    }}
  >
    <header style={{ marginBottom: '1.5rem' }}>
      <Link to="/">Home</Link>
      <Link to="/about/" style={{ float: 'right' }}>
        About
      </Link>
    </header>
    {children}
  </div>
)

export default Layout
