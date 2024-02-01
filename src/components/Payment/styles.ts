import { styled } from 'styled-components'
import { fonts } from '../../styles/fonts'

export const PaymentContainer = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme['gray-200']};
`

export const PaymentHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  svg {
    margin-right: 0.5rem;
  }
  span {
    ${fonts.sizes.textL}
  }
  p {
    ${fonts.sizes.textM}
  }
`

export const PaymentBody = styled.div`
  display: flex;

  button {
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 8px;
    background-color: ${props => props.theme['gray-400']};

    svg {
      margin-right: 0.5rem;
    }
  }

  button:hover {
    background-color: ${props => props.theme['brown-100']};
  }

  button:active {
    background-color: ${props => props.theme['purple-100']};
    border: 1px solid ${props => props.theme['purple-500']};
  }
`
