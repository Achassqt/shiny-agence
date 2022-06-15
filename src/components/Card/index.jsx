import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

const CartLabel = styled.span`
  color: ${colors.primary};
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`

const CartImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

const CartTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`

function Card({ label, title, picture }) {
  return (
    <CartWrapper>
      <CartLabel>{label}</CartLabel>
      <CartImage src={picture} alt="freelance" />
      <CartTitle>{title}</CartTitle>
    </CartWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: '',
  label: '',
  picture: DefaultPicture,
}

export default Card
