import React, { useState } from 'react'
import moon from '../assets/moon.svg'
import sun from '../assets/cloudy.svg'

const themes = {
  dark: {
    name: 'dark',
    icon: moon,
    foreground: '#FFFFFF',
    background: '#000000',
  },
  light: {
    name: 'light',
    icon: sun,
    foreground: '#000000',
    background: '#FFFFFF',
  },
}

const themeContext = React.createContext({
  theme: themes.light,
  changeTheme: () => {},
})

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || themes.light,
  )

  const changeTheme = () => {
    const newTheme = theme.name === 'dark' ? themes.light : themes.dark
    setTheme(newTheme)
    localStorage.setItem('theme', JSON.stringify(newTheme))
  }

  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </themeContext.Provider>
  )
}

export { themeContext, themes }
export default ThemeProvider
