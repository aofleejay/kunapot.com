import React from 'react'

import ThemeProvider from './src/components/ThemeProvider'
import './src/styles/global.css'

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
