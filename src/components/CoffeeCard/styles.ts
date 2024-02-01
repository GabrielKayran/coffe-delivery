import { styled } from 'styled-components'
import { fonts } from '../../styles/fonts'

export const CoffeeCardContainer = styled.div`
  margin: 20px;
  padding: 2rem;
  border-radius: 6px 36px;
  background-color: ${props => props.theme['gray-200']};
  height: 400px;

  hr {
    margin-bottom: 1rem;
  }
`

export const Coffee = styled.div`
  margin-bottom: 2rem;
  display: flex;
  h2 {
    ${fonts.sizes.textM}
  }
  p {
    ${fonts.sizes.titleS}
    margin-left: 1rem;
  }
`
export const RemoveButton = styled.button`
  margin-left: 0.5rem;
  ${fonts.sizes.textS}
  color: ${props => props.theme['brown-300']};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme['gray-400']};
  border-radius: 8px;
  padding: 0 0.5rem;

  svg {
    margin-right: 0.2rem;
  }
`

export const CoffeeButtons = styled.div`
  margin-top: 1rem;
  display: flex;
`

export const CoffeeImage = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 0.5rem;
`

export const PurchaseDetails = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: space-between;
    ${fonts.sizes.textS}
  }
  .total {
    ${fonts.sizes.titleS}
  }
`
