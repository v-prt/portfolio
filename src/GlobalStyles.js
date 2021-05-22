import { createGlobalStyle, keyframes } from "styled-components";

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

// ANIMATIONS
export const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

export const rotate = keyframes`
 0% {
    opacity: 0;
    transform: translate3d(0px, -50px, 0px);
  }
  2% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }
  25% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }
  27% {
    opacity: 0;
    transform: translate3d(0px, 50px, 0px);
  }
  99% {
    opacity: 0;
    transform: translate3d(0px, 50px, 0px);
  }
  100% {
    opacity: 0;
    transform: translate3d(0px, -50px, 0px);
  }
`;

export const rotateLast = keyframes`
 0% {
    opacity: 0;
    transform: translate3d(50px, 0px, 0px);
  }
  40% {
      opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }
`;
