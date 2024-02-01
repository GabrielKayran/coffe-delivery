import { styled } from 'styled-components'
import { fonts } from '../../styles/fonts'

export const CoffeeCardContainer = styled.div`
  padding: 2rem;
  border-radius: 6px 36px;
  background-color: ${props => props.theme['gray-200']};

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

  transition: all 0.2s;
  &:hover {
    background-color: ${props => props.theme['brown-100']};
  }
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
    margin-top: 0.75rem;
    display: flex;

    justify-content: space-between;
    ${fonts.sizes.textS}
  }
  .total {
    ${fonts.sizes.titleS}
  }
`

export const ConfirmButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  color: ${props => props.theme.white};
  padding: 0.7rem 0;
  background-color: ${props => props.theme['yellow-500']};
  border-radius: 8px;

  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme['yellow-700']};
  }
`
