import React from 'react'

const Grid: React.FC = ({ children }) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-3 mx-2 xl:mx-8 my-8 gap-8 xl:gap-12`}
    >
      {children}
    </div>
  )
}

export default Grid
