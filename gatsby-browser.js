import React from 'react'

import themeContext from './src/context/theme'
import './src/styles/global.css'

export const wrapRootElement = ({ element }) => {
  return <themeContext.Provider value="dark">{element}</themeContext.Provider>
}
