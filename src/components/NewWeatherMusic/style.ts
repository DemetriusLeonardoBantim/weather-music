import styled from 'styled-components'


export const Container = styled.form`
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.25rem;
  justify-content: center;
  height: 25rem;
  width: 25rem;
  background: var(--shape);
  -webkit-box-shadow: 4px 3px 15px 5px rgba(0,0,0,0.1); 
  box-shadow: 4px 3px 15px 5px rgba(0,0,0,0.1);
  h2{
    color: var(--text-title);
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  input{
    padding: 0 1rem;
    height: 3rem;
    border-radius: 0.25rem;
    text-align: center;
  }
  button{
    height: 2rem;
    padding: 0 7rem;
    margin-top: 2rem;
    cursor: pointer;
    color: #fff;
    background-color:var(--blue);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    transition: 0.2s;
    &:hover{
      background-color:var(--green) ;
      color: var(--blue);
    }
  }


`