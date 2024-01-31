import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 11rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 2.37rem;
      height: 2.37rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;

      color: ${props => props.theme['yellow-500']};
      background-color: ${props => props.theme['yellow-300']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: 0.2s;

      &:hover {
        border-bottom: 3px solid ${props => props.theme['yellow-500']};
      }

      &.active {
        color: ${props => props.theme['yellow-500']};
      }
    }
  }
`

export const Location = styled.div`
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.theme['purple-100']};
  color: ${props => props.theme['purple-500']};
`
