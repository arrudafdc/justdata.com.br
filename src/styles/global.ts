import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #1D1F20;
    color: ${(props) => props.theme.white};
  }

  body, input, textarea, button {
    font-family: "Noto Sans", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`;
