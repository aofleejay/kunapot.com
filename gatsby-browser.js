import React from 'react'

import themeContext from './src/context/theme'
import './src/styles/global.css'

const theme = localStorage.getItem('theme') || 'light'

export const wrapRootElement = ({ element }) => {
  return <themeContext.Provider value={theme}>{element}</themeContext.Provider>
}
