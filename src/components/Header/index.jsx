import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import DarkLogo from '../../assets/dark-logo.png'
import LightLogo from '../../assets/light-logo.png'
import { useTheme } from '../../utils/hooks'

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const HomeLogo = styled.img`
  height: 70px;
`

function Header() {
  const { theme } = useTheme()

  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo
          src={theme === 'light' ? DarkLogo : LightLogo}
          alt="Logo Shiny"
        />
      </Link>
      <div>
        <StyledLink $theme={theme} to="/">
          Accueil
        </StyledLink>
        <StyledLink $theme={theme} to="freelances">
          Profils
        </StyledLink>
        <StyledLink to="survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
