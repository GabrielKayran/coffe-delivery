import { styled } from 'styled-components'
import { fonts } from '../../styles/fonts'

export const SuccessContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  div {
    margin-right: 6rem;
  }
  span {
    ${fonts.sizes.textM}
  }
`

export const SuccessImageContainer = styled.img``

export const SuccessInfo = styled.div`
  min-width: 32rem;
  padding: 2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  border: 3px solid;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        ${props => props.theme['yellow-500']},
        ${props => props.theme['purple-500']}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  div {
    padding: 1rem;
    display: flex;
    align-items: center;
  }
  svg {
    padding: 8px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  span {
    display: block;
  }
  strong {
    display: block;
    margin-top: 4px;
  }
`
