import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import BackToTop from '../back-to-top'

const scrollTo = (y: number) =>
  act(() => {
    window.scrollY = y
    fireEvent.scroll(window)
  })

beforeEach(() => {
  window.scrollY = 0
  window.scrollTo = jest.fn()
})

describe('BackToTop', () => {
  it('stays hidden near the top of the page', () => {
    render(<BackToTop />)
    expect(screen.getByLabelText('Back to top').className).toContain(
      'invisible',
    )
  })

  it('appears after scrolling down and hides again at the top', () => {
    render(<BackToTop />)
    const button = screen.getByLabelText('Back to top')

    scrollTo(1200)
    expect(button.className).not.toContain('invisible')

    scrollTo(100)
    expect(button.className).toContain('invisible')
  })

  it('scrolls the window to the top when clicked', () => {
    render(<BackToTop />)
    scrollTo(1200)
    fireEvent.click(screen.getByLabelText('Back to top'))
    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({ top: 0 }),
    )
  })
})
