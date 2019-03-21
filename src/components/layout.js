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
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1.5rem',
      }}
    >
      <Link to="/">Home</Link>
      <div style={{ display: 'inline', textAlign: 'right' }}>
        <a
          href="https://medium.com/@aofleejay/latest"
          target="_blank"
          rel="noopener noreferrer"
        >
          Software Engineering Blog
        </a>
        <Link to="/about/" style={{ marginLeft: 20 }}>
          About
        </Link>
      </div>
    </header>
    {children}
  </div>
)

export default Layout
