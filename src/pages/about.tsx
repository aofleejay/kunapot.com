import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Layout, SEO } from '../components'

const AboutPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            github
            medium
          }
        }
      }
    }
  `)

  const { github, medium } = data.site.siteMetadata.social

  return (
    <Layout>
      <SEO />
      <div className="prose max-w-screen-md mx-auto p-4 my-8">
        <h1 className="text-2xl font-bold mb-8">
          👋 Hi there, I'm <span className="text-green-500">Aof</span>.
        </h1>
        <p>
          I'm a software engineer from Bangkok, Thailand, and previously worked
          at THiNKNET. I write code on{' '}
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' '}
          and write blogs about software engineering on{' '}
          <a href={medium} target="_blank" rel="noopener noreferrer">
            Medium
          </a>{' '}
          and also about books, games on <Link to="/">this blog</Link>.
        </p>
        <p>
          💻 I occasionally write code for fun in my spare time on{' '}
          <a
            href={`${github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          mostly in JavaScript and TypeScript. My previous work is about
          building websites and mobile applications using React and React-Native
          and also backend with ExpressJS.
        </p>
        <p>
          🎮 I like to play games especially RPG, strategy, and decision-based
          games. I also do blogging about the{' '}
          <Link to="/tags/เล่าเกม">game summary</Link> here.
        </p>
        <p>
          📖 I like to read books. My favorite books e.g. a song of ice and fire
          series, what if?. Here's{' '}
          <Link to="/tags/เล่าหนังสือ">my book summary</Link>.
        </p>
        <p>
          Thanks for visiting my website 🌷 and you can contact me{' '}
          <a href="mailto:aofleejay@hotmail.com">here</a>.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
