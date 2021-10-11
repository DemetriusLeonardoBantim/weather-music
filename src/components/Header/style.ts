import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: var(--green);
`



export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 2rem 1rem 1rem;
  justify-content: center;
  font-size: 2rem;
  span{
    display: flex;
    color: var(--background);
    p{
      margin-left: 10px;
      color: var(--blue-light);
      font-weight: bold;
    }
  }
`