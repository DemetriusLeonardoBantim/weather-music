import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 25rem;
  width: 50rem;
  border-radius: 0.25rem;
  background-color: var(--shape);
  h1{
    text-align: center;
    font-size: 1.5rem;
  }
  -webkit-box-shadow: 4px 3px 15px 5px rgba(0,0,0,0.1); 
  box-shadow: 4px 3px 15px 5px rgba(0,0,0,0.1);

  section{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 50px;
    p{
      margin: 15px;
    }
    span{
      display: flex;
      align-items: center;
      font-weight: 500;
    }
  }

  div{
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 200px;
    bottom: 0;
    position: absolute;
    button{
      margin: 2rem;
      padding: 1rem;
      width: 150px;
      border: 0;
      border-radius: 0.5rem;
      background: var(--green);
      cursor: pointer;
      &+button{
        border: 1px solid var(--red);
        color: #171923;
        background-color: var(--red);
      }
    }
  }
`