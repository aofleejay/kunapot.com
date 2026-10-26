import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FaSun, FaMoon } from 'react-icons/fa'

interface LayoutProps {
  children: React.ReactNode
}

const navLink = 'text-muted hover:text-primary transition-colors duration-300'

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
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 border-b border-line bg-nav backdrop-blur-xl backdrop-saturate-150">
              <nav className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 text-sm sm:gap-8 sm:px-6">
                <Link
                  to={'/'}
                  className="mr-auto text-base font-semibold text-primary"
                >
                  kunapot<span className="text-ascending">.com</span>
                </Link>
                <a
                  href={medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={navLink}
                >
                  Medium
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={navLink}
                >
                  GitHub
                </a>
                <Link to={'/about'} className={navLink}>
                  About
                </Link>
                <button
                  type="button"
                  aria-label={
                    theme === 'dark'
                      ? 'Switch to light mode'
                      : 'Switch to dark mode'
                  }
                  className={`${navLink} cursor-pointer`}
                  onClick={() =>
                    toggleTheme(theme === 'dark' ? 'light' : 'dark')
                  }
                >
                  {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
              </nav>
            </header>
            <main className="flex-grow pb-16 sm:pb-24">{children}</main>
            <footer className="border-t border-line bg-faded">
              <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-muted sm:px-6">
                Made with 💖 by{' '}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ascending underline underline-offset-2"
                >
                  {author}
                </a>
                . Build with{' '}
                <a
                  href="https://www.gatsbyjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ascending underline underline-offset-2"
                >
                  Gatsby
                </a>
                .
              </div>
            </footer>
          </div>
        )
      }}
    </ThemeToggler>
  )
}

export default Layout
