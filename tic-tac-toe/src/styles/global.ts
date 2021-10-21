import { createGlobalStyle } from 'styled-components';

import { lg, md } from './breakpoints';
import { black, gray, white } from './colors';

const GlobalStyle = createGlobalStyle`
  :root,
  html {
    font: 400 16px 'Open Sans', sans-serif;
    color: ${black[400]};

    background-color: ${gray[100]};

    height: 100%;
    width: 100%;

    scroll-behavior: smooth;

    @media (max-width: ${lg}) {
      font-size: 87.5%;
    }

    @media (max-width: ${md}) {
      font-size: 75%;
    }
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;

    outline: 0;

    box-sizing: border-box;
  }

  html,
  body {
    height: 100vh;
  }

  body {
    text-rendering: optimizeSpeed;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    margin: 0;
  }

  body,
  input,
  button,
  textarea {
    font: 400 1rem 'Open Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: #b2bec3;
  }

  ::-webkit-scrollbar-thumb {
    background: ${white[500]};
  }
`;

export default GlobalStyle;
