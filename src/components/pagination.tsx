import React from 'react'
import { Link } from 'gatsby'

interface PaginationProps {
  currentPage: number
  numPages: number
}

export const pagePath = (page: number) => (page === 1 ? '/' : `/page/${page}/`)

const pageLink =
  'flex h-10 min-w-10 items-center justify-center rounded-full px-4 text-sm transition-colors duration-300'

const Pagination = ({ currentPage, numPages }: PaginationProps) => {
  if (numPages <= 1) return null

  return (
    <nav
      aria-label="Pagination"
      className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-center gap-2 px-4 sm:mt-16 sm:px-6"
    >
      {currentPage > 1 && (
        <Link
          to={pagePath(currentPage - 1)}
          rel="prev"
          className={`${pageLink} text-muted hover:text-primary`}
        >
          ← Newer
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => i + 1).map((page) =>
        page === currentPage ? (
          <span
            key={page}
            aria-current="page"
            className={`${pageLink} bg-faded font-semibold text-primary`}
          >
            {page}
          </span>
        ) : (
          <Link
            key={page}
            to={pagePath(page)}
            className={`${pageLink} text-muted hover:bg-faded hover:text-primary`}
          >
            {page}
          </Link>
        ),
      )}
      {currentPage < numPages && (
        <Link
          to={pagePath(currentPage + 1)}
          rel="next"
          className={`${pageLink} text-muted hover:text-primary`}
        >
          Older →
        </Link>
      )}
    </nav>
  )
}

export default Pagination
