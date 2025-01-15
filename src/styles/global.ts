import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  html {
  height: 100%;
  }

  body {

    /* background: url("/main-bg.jpg");
    background-size: contain; 
    background-position: center;  */
  background: url("/main-bg.jpg") no-repeat center center;
  background-size: cover; /* Ajusta a imagem para cobrir o espaço disponível */
    
    color: ${(props) => props.theme.white};
  }

  body, input, textarea, button {
    font-family: "Noto Sans", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`;
