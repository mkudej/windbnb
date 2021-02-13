import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`  
  *, *:before, *:after{
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  .wrapper {
    max-width: 1255px;
    margin: 0 auto;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    font-size: 14px;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
  }
`;

export default GlobalStyles;
