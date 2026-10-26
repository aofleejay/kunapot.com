import React from 'react'

interface GridProps {
  children: React.ReactNode
}

const Grid = ({ children }: GridProps) => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
      {children}
    </div>
  )
}

export default Grid
