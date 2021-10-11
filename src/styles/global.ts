import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width:1080px){
      font-size:93.75%;
    }
    @media (max-width:720){
      font-size: 87.5%;
    }
  }

  :root{
  --background: #f0f2f5;
  --red: #E52E4D;
  --green: #33cc95;
  --blue: #5429CC;
  --blue-light: #6933FF;
  --text-title:#363F5F;
  --text-body: #969CB3;
  --background: #F0F2F5;
  --shape: #FFFFFF;
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body,input,textarea,button{
    font-family: 'Poppins', sans-serif;
    font-weight:400;
  }
`