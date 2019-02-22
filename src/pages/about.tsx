import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function About() {
  return (
    <Layout>
      <SEO />
      <h1>About</h1>
      <h2>Kunapot Pairat</h2>
      <p>
        <span role="img" aria-label="computer">💻</span><span> Software Developer / </span>
        <span role="img" aria-label="runner">🏃</span><span> Slow Runner / </span>
        <span role="img" aria-label="cat">🐱</span><span> Pokemon Trainer / </span>
        <span role="img" aria-label="lovely-cat">😻</span><span> Cat Lover / </span>
        <span role="img" aria-label="guitar">🎸</span><span> Guitar Player </span>
      </p>
      <p>Medium - <a href="https://medium.com/@aofleejay">https://medium.com/@aofleejay</a></p>
      <p>Github - <a href="https://github.com/aofleejay">https://github.com/aofleejay</a></p>
    </Layout>
  )
}

export default About
