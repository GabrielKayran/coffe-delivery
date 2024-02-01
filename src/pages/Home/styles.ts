import { styled } from 'styled-components'
import { fonts } from '../../styles/fonts'

export const HomeContainer = styled.section`
  position: relative;
`

export const Content = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    ${fonts.sizes.titleXL}
    color: ${props => props.theme['brown-800']};
  }

  span {
    ${fonts.sizes.textL}
    color: ${props => props.theme['brown-700']};
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      padding: 8px;
      border-radius: 50%;
    }
  }
`

export const ImageCoffeeContainer = styled.div`
  width: 29rem;
  height: 22.5rem;
`

export const CoffeeList = styled.section`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${fonts.sizes.titleL}
    color: ${props => props.theme['brown-700']}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
  }
`
