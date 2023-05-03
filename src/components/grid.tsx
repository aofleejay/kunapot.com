import React from 'react'

interface GridProps {
  children: React.ReactNode
}

const Grid = ({ children }: GridProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mx-2 xl:mx-8 my-8 gap-8 xl:gap-12">
      {children}
    </div>
  )
}

export default Grid
