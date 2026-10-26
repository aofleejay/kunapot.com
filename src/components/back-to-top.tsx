import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

// Show the button once the reader is past roughly one screen of content
const SHOW_AFTER_PX = 600

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-nav text-primary shadow-lg shadow-black/10 backdrop-blur-xl transition-[opacity,visibility,transform] duration-300 hover:text-ascending sm:bottom-8 sm:right-8 ${
        visible
          ? 'visible translate-y-0 opacity-100'
          : 'invisible translate-y-2 opacity-0'
      }`}
    >
      <FaArrowUp />
    </button>
  )
}

export default BackToTop
