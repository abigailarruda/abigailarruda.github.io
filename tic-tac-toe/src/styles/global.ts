import { createGlobalStyle, css } from 'styled-components';

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

  ${css`
    .swal2-popup,
    .swal2-modal {
      border-radius: 8px !important;

      background-color: ${white[500]};

      max-width: 20rem;

      padding: 2rem;
    }

    .swal2-title {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 1.5rem;
      color: ${black[400]};

      padding: 0;
      margin-bottom: 0.5rem;
    }

    .swal2-html-container {
      font: 400 1rem 'Open Sans', sans-serif;
      color: ${black[400]};

      padding: 0;
      margin: 0 0 1rem 0;
    }

    .swal2-actions {
      width: 100%;
      margin-top: 0;
    }

    .swal2-confirm {
      width: 100%;
      height: 3rem;

      border: 0;
      border-radius: 4rem;

      padding: 0.5rem 1rem;
      margin: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: all 0.2s ease-in-out;
      background: ${black[400]} !important;

      color: ${white[500]} !important;
    }

    .swal2-input {
      width: 100%;
      height: 3rem;

      padding: 0.5rem 1rem;
      margin: 0 0 1rem;

      background-color: ${white[500]};

      border-radius: 4px;
      border: 1px solid ${gray[200]};
      box-shadow: none !important;

      font: 400 1rem 'Open Sans', sans-serif;
      text-align: left;
      color: ${black[400]};
    }

    .swal2-input::placeholder,
    .swal2-input:-ms-input-placeholder,
    .swal2-input:-ms-input-placeholder {
      color: ${black[400]} !important;
      opacity: 1;
    }

    .swal2-input:focus {
      border: 1px solid ${gray[500]};
    }
  `}
`;

export default GlobalStyle;
