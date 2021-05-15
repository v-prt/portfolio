import { createGlobalStyle } from "styled-components";

export const COLORS = {
  darkest: "#1a1a1a",
  dark: "#333333",
  medium: "#4c846f",
  light: "#c0c9ae",
  lightest: "#fcf7f3",
};

export default createGlobalStyle`
    * {
        font-family: 'Spartan', sans-serif;
        font-weight: 300px;
        line-height: 1;
        margin: 0;
        padding: 0;
        border: 0;
    }
    html, body {
        overflow-x: hidden;
        overscroll-behavior-y: none;
        overscroll-behavior-x: none;
    }
    h1, h2, h3 {
        font-family: "Arima Madurai", cursive;
        font-weight: 100;
    }
    p {
        line-height: 1.75;
    }
    ol, ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        transition: 0.2s ease-in-out;
    }
    strong {
    font-weight: bold;
  }
`;
