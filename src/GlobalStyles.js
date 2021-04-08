import { createGlobalStyle } from "styled-components";

export const COLORS = {
  primary: "RGB(5, 16, 38)",
  secondary: "RGB(9, 27, 64)",
  tertiary: "RGB(2, 56, 89)",
  accent1: "RGB(217, 78, 143)",
  accent2: "RGB(242, 92, 5)",
};

export default createGlobalStyle`
    * {
        font-family: 'Open Sans', sans-serif;
        line-height: 1.75;
        margin: 0;
        padding: 0;
    }
    h1, h2, h3 {
        font-family: "Poppins", sans-serif;
    }
    ol, ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: ${COLORS.accent1};
        &:hover {
            color: ${COLORS.accent2};
        }
    }
`;
