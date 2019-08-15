import React from 'react'

const themeContext = React.createContext('dark')

const themeColor = {
  dark: {
    primary: '#000000',
    secondary: '#FFFFFF',
  },
  light: {
    primary: '#FFFFFF',
    secondary: '#000000',
  },
}

export { themeColor }
export default themeContext
