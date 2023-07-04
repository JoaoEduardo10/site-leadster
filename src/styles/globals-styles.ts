import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.font.family.Plus_Jakarta}, sans-serif;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colors.white};
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-transform: none;
    text-decoration: none;
    color: #222;
  }
`;

export { GlobalStyles };
