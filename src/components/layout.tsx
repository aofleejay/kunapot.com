import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FaSun, FaMoon } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
deckDeckGoHighlightElement()

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
            <header className="shadow border-b border-faded">
              <nav className="flex items-center p-4 sm:p-8 text-sm sm:text-base">
                <div className="flex-grow space-x-4 sm:space-x-8">
                  <AniLink
                    paintDrip
                    hex="#38b2ac"
                    to={'/'}
                    className="hover:text-ascending duration-500"
                  >
                    Home
                  </AniLink>
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
                  <AniLink
                    paintDrip
                    hex="#38b2ac"
                    to={'/about'}
                    className="hover:text-ascending duration-500"
                  >
                    About
                  </AniLink>
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
            <main className="container mx-auto">{children}</main>
            <footer className="p-8">
              Made by{' '}
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
          </>
        )
      }}
    </ThemeToggler>
  )
}

export default Layout
