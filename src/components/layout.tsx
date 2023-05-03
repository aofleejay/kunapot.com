import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FaSun, FaMoon } from 'react-icons/fa'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
deckDeckGoHighlightElement()

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
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
          <div className="min-h-screen">
            <header>
              <nav className="flex items-center p-4 sm:p-8 text-sm sm:text-base">
                <div className="flex-grow space-x-4 sm:space-x-8">
                  <Link to={'/'} className="hover:text-ascending duration-500">
                    Home
                  </Link>
                  <a
                    href={medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ascending duration-500"
                  >
                    Medium
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ascending duration-500"
                  >
                    GitHub
                  </a>
                  <Link
                    to={'/about'}
                    className="hover:text-ascending duration-500"
                  >
                    About
                  </Link>
                </div>
                <span
                  className="cursor-pointer hover:text-ascending duration-500"
                  onClick={() =>
                    toggleTheme(theme === 'dark' ? 'light' : 'dark')
                  }
                >
                  {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </span>
              </nav>
            </header>
            <main className="container mx-auto pb-8 sm:pb-16">{children}</main>
            <footer className="w-full fixed bottom-0 px-8 py-4 sm:py-8 bg-faded">
              Made with 💖 by{' '}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ascending"
              >
                {author}
              </a>
              . Build with{' '}
              <a
                href="https://www.gatsbyjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ascending"
              >
                Gatsby
              </a>
              .
            </footer>
          </div>
        )
      }}
    </ThemeToggler>
  )
}

export default Layout
