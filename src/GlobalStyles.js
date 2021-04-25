import { createGlobalStyle } from "styled-components";

export const COLORS = {
  dark: "#1a1a1a",
  medium: "#4c846f",
  light: "#fcf7f3",
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
        background: linear-gradient(${COLORS.dark}, #202c31, ${COLORS.medium}, ${COLORS.light});
    }
    h1, h2, h3 {
        font-family: "Arima Madurai", cursive;
        font-weight: 100;
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
