import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FaSun, FaMoon } from 'react-icons/fa'

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          social {
            github
            medium
          }
        }
      }
    }
  `)

  const {
    author,
    social: { github, medium },
  } = data.site.siteMetadata

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        return (
          <>
            <header className="shadow">
              <nav className="flex items-center p-4 sm:p-8 text-sm sm:text-base">
                <div className="flex-grow space-x-4 sm:space-x-8">
                  <Link to={'/'}>Home</Link>
                  <a href={medium} target="_blank" rel="noopener noreferrer">
                    Medium
                  </a>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <Link to={'/about'}>About</Link>
                </div>
                <span
                  className="cursor-pointer"
                  onClick={() =>
                    toggleTheme(theme === 'dark' ? 'light' : 'dark')
                  }
                >
                  {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </span>
              </nav>
            </header>
            <main className="container mx-auto">{children}</main>
            <footer>
              <div className="p-8">
                Made by{' '}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500"
                >
                  {author}
                </a>
                . Build with{' '}
                <a
                  href="https://www.gatsbyjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500"
                >
                  Gatsby
                </a>
                .
              </div>
            </footer>
          </>
        )
      }}
    </ThemeToggler>
  )
}

export default Layout
