import React from 'react'

type GridProps = {
  column?: number
}

const Grid: React.FC<GridProps> = ({ children, column }) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-${column} mx-2 xl:mx-8 my-8 gap-8 xl:gap-12`}
    >
      {children}
    </div>
  )
}

Grid.defaultProps = {
  column: 1,
}

export default Grid
