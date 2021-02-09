import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`  
  *{
    box-sizing: border-box;
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
`;

export default GlobalStyles;
