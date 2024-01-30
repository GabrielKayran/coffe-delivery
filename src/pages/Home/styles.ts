import { styled } from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HomeContainer = styled.main`
  margin: 0 16rem;
  padding: 40px 0;
  display: flex;
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    ${mixins.fonts.titleXL}
    color: ${props => props.theme['brown-800']};
  }

  span {
    ${mixins.fonts.textL}
    color: ${props => props.theme['brown-700']};
  }
`

export const Info = styled.div`
  max-width: 45rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  margin-top: 4rem;

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

export const ImageCoffeContainer = styled.div`
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
    ${mixins.fonts.titleL}
    color: ${props => props.theme['brown-700']}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`
