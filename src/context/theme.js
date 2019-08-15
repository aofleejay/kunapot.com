import React from 'react'

const themeContext = React.createContext({
  theme: 'dark',
  changeTheme: () => {},
})

const themeColor = {
  dark: {
    foreground: '#000000',
    background: '#FFFFFF',
  },
  light: {
    foreground: '#FFFFFF',
    background: '#000000',
  },
}

export { themeColor }
export default themeContext
