import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ children }) => (
  // <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
  //   <header style={{ marginBottom: `1.5rem` }}>
  //     <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
  //       <h3 style={{ display: `inline` }}>MySweetSite</h3>
  //     </Link>
  //     <ul style={{ listStyle: `none`, float: `right` }}>
  //       <ListLink to="/">Home</ListLink>
  //       <ListLink to="/about/">About</ListLink>
  //       <ListLink to="/contact/">Contact</ListLink>
  //     </ul>
  //   </header>
  //   {children}
  // </div>
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Link to={`/`}>
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={`/about/`}
          css={css`
            float: right;
          `}
        >
          About
        </Link>
        {children}
      </div>
    )}
  />
)

export default Layout
