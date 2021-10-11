import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: var(--green);
`



export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2rem 1rem 1rem;
  justify-content: space-between;
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

  nav{
    ul{
      display: flex;
      li{
        list-style: none;
        font-size: 1.25rem;
        margin: 0 50px;
      
        a{
          text-decoration: none;
          color: var(--blue-light);
        }
      }
    }
  }
`