import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import HomeIllustration from '../../assets/home-illustration.svg'
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomeContainer = styled.div`
  margin-top: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${StyledLink} {
    max-width: 250px;
  }
`

const StyledTitle = styled.h2`
  font-size: 45px;
  padding-bottom: 30px;
  max-width: 450px;
  line-height: 65px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const Illustration = styled.img``

function Home() {
  const { theme } = useTheme()

  return (
    <HomeWrapper>
      <HomeContainer theme={theme}>
        <LeftCol>
          <StyledTitle theme={theme}>
            Repérez vos besoins, on s'occupe du reste, avec les meilleurs
            talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration
          src={HomeIllustration}
          alt="Illustration page d'accueil"
        />
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home
