import React from 'react'
import { css } from '@emotion/core'

interface MenuItemProps {
  isActive: boolean
  onClick: () => void
}

const MenuItem: React.FC<MenuItemProps> = ({ children, onClick, isActive }) => {
  return (
    <p
      css={css`
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
        cursor: pointer;
        color: ${isActive ? 'var(--textLink)' : 'grey'};
      `}
      onClick={onClick}
    >
      {children}
    </p>
  )
}

export default MenuItem
