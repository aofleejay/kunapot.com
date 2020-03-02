import React from 'react'
import { css } from '@emotion/core'

const Menu: React.FC = ({ children }) => {
  return (
    <section
      id="menu"
      css={css`
        text-align: center;
      `}
    >
      {children}
    </section>
  )
}
export default Menu
