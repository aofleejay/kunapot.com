import React from 'react'
import { render, screen } from '@testing-library/react'
import Pagination, { pagePath } from '../pagination'

describe('pagePath', () => {
  it('maps page 1 to the home page', () => {
    expect(pagePath(1)).toBe('/')
  })

  it('maps later pages to /page/n/', () => {
    expect(pagePath(2)).toBe('/page/2/')
    expect(pagePath(10)).toBe('/page/10/')
  })
})

describe('Pagination', () => {
  it('renders nothing when there is a single page', () => {
    const { container } = render(<Pagination currentPage={1} numPages={1} />)
    expect(container.innerHTML).toBe('')
  })

  it('hides "Newer" on the first page', () => {
    render(<Pagination currentPage={1} numPages={3} />)
    expect(screen.queryByText('← Newer')).toBeNull()
    expect(screen.getByText('Older →').getAttribute('href')).toBe('/page/2/')
  })

  it('hides "Older" on the last page', () => {
    render(<Pagination currentPage={3} numPages={3} />)
    expect(screen.queryByText('Older →')).toBeNull()
    expect(screen.getByText('← Newer').getAttribute('href')).toBe('/page/2/')
  })

  it('marks the current page and links the others', () => {
    render(<Pagination currentPage={2} numPages={3} />)
    const current = screen.getByText('2')
    expect(current.tagName).toBe('SPAN')
    expect(current.getAttribute('aria-current')).toBe('page')
    expect(screen.getByText('1').getAttribute('href')).toBe('/')
    expect(screen.getByText('3').getAttribute('href')).toBe('/page/3/')
    expect(screen.getByText('← Newer').getAttribute('href')).toBe('/')
  })
})
