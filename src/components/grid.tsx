import React from 'react'
import { css } from '@emotion/core'

type GridProps = {
  column?: number
}

const Grid: React.FC<GridProps> = ({ children, column }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(${column}, 1fr);
        gap: 4rem;
        padding 4rem 2rem;

        @media only screen and (max-width: 600px) {
          grid-template-columns: 1fr;
          gap: 2rem 0;
          padding 2rem 1rem;
        }
      `}
    >
      {children}
    </div>
  )
}

Grid.defaultProps = {
  column: 1,
}

export default Grid
