import React, { useState } from 'react'

import themeContext from './src/context/theme'
import './src/styles/global.css'

const initialTheme = localStorage.getItem('theme') || 'light'

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme)

  const changeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </themeContext.Provider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
