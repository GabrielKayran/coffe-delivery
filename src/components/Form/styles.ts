import { fonts } from '../../styles/fonts'
import { styled } from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 40px;
  background: ${props => props.theme['gray-200']};
`
export const FormHeader = styled.div`
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

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;

  .narrow {
    width: 200px;
  }

  .Xnarrow {
    width: 3.75rem;
  }
  div {
    border: 1px solid ${props => props.theme['gray-200']};
    display: flex;
  }

  input {
    outline: none;
    border-radius: 8px;
    padding: 1rem;
    margin: 0.5rem;
    background-color: ${props => props.theme['gray-300']};
    border: 1px solid transparent;
    width: 100%;
  }

  input:focus {
    border: 1px solid ${props => props.theme['yellow-500']};
  }
`
