import { createGlobalStyle } from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../context'

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  body {
    margin: 0;
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#2F2E41' : 'white')};
  }
`

function GlobalStyle() {
  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
