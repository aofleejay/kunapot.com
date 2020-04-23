import React from 'react'
import { css } from '@emotion/core'

const Grid: React.FC = ({ children }) => {
  return (
    <div
      css={css`
        display: grid;
        max-width: 1400px;
        grid-template-columns: repeat(3, 1fr);
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

export default Grid
