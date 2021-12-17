import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #121214;
    --shape: #202024;
    --gray: #e1e1e6;
    --text: #a8a8b3;
    --support: #737380;

    --title: #ffffff;
    --subtitle: #9e9e9e;

    --primary: #8257e5;
    --primary-darker: #28203e;
    --primary-hover: #9466ff;
    --primary-border: #6833e4;
    --primary-shape: #734bd1;

    --defeat: #AB2A30;
    --win: #237563;
    --yellow: #ffcd1e;

    --green: #8cc84b;
    --green-low: #1c2a24;
    --green-darker: #0f3924;


    --shape-dark: #3c3c42;
    --shape-hover: #29292e;

    --icons: #41414d;
    --borders: #323238;

    --iron: #696362;
    --silver: #859BA2;
    --gold: #EBD061;
    --platinum: #4E9996;
    --diamond: #576BCE;
    --master: #9D48E0;
    --grandmaster: #D94444;
    --challenger: #F4C874;

    --damage: #db3a2c;
    --defense: #8cc84b;
    --magic: #a32ddf;
    --difficulty: #2ac7e3;

    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: Roboto, sans-serif;
    background: var(--background);
    color: var(--text);
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    color: ${({ theme }) => theme.colors.text}
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  sub {
    color: ${({ theme }) => theme.colors.support};
  }

  button {
    border: none;
    outline: none;
  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-track {
    background: var(--shape);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border: 3px solid var(--primary);
    border-radius: 5px;
  }

  physicaldamage {
    color: var(--damage);
    font-weight: 500;
  }
  magicdamage {
    color: var(--magic);
    font-weight: 500;
  }
`
