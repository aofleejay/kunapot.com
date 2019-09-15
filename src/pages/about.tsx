import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

function About(props) {
  const { medium, github } = props.data.site.siteMetadata.social

  return (
    <Layout>
      <SEO />
      <h1>Kunapot Pairat</h1>
      <p>
        <span role="img" aria-label="computer">
          💻
        </span>
        <span> Software Developer / </span>
        <span role="img" aria-label="runner">
          🏃
        </span>
        <span> Slow Runner / </span>
        <span role="img" aria-label="cat">
          🐱
        </span>
        <span> Pokemon Trainer / </span>
        <span role="img" aria-label="lovely-cat">
          😻
        </span>
        <span> Cat Lover / </span>
        <span role="img" aria-label="guitar">
          🎸
        </span>
        <span> Guitar Player </span>
      </p>
      <p>
        Medium -{' '}
        <a href={medium} target="_blank" rel="noopener noreferrer">
          {medium}
        </a>
      </p>
      <p>
        GitHub -{' '}
        <a href={github} target="_blank" rel="noopener noreferrer">
          {github}
        </a>
      </p>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        social {
          github
          medium
        }
      }
    }
  }
`

export default About
