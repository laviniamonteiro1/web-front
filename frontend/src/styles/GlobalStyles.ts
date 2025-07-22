import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #2d2d2d;
    font-family: "Barlow Condensed", sans-serif;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #003459;
    text-align: center;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1.25rem;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  body {
    background-color: white;
  }

  @media (max-width: 525px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
