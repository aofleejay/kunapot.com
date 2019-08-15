import React, { useState, useEffect } from 'react'

import themeContext from '../context/theme'

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem('theme'))
    if (currentTheme) {
      setTheme(currentTheme)
    }
  }, [theme])

  const changeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', JSON.stringify(newTheme))
  }

  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider
