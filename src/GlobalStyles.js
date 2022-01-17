import styled, { createGlobalStyle, keyframes } from 'styled-components'

export const COLORS = {
  darkest: '#1a1a1a',
  dark: '#333333',
  medium: '#4c846f',
  light: '#c0c9ae',
  lightest: '#fcf7f3',
}

export default createGlobalStyle`
    * {
        font-family: 'Spartan', sans-serif;
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
`

// STYLED COMPONENTS
export const ProjectGallery = styled.div`
  display: flex;
  width: calc(100% - 40px);
  border-bottom: 1px dotted #ccc;
  overflow-x: scroll;
`

export const ProjectImage = styled.img`
  position: relative; // allows window to keep scrolling when hovering on gallery
  height: 500px;
  margin: 20px 10px;
  border-radius: 10px;
  &:first-child {
    margin-left: 0;
  }
  @media (max-width: 1000px) {
    height: 300px;
  }
`

export const UnderlinedLink = styled.a`
  color: ${COLORS.medium};
  font-weight: bold;
  position: relative;
  z-index: 1;
  &:after {
    background: ${COLORS.light};
    content: '';
    height: 5px;
    width: 100%;
    position: absolute;
    bottom: 1px;
    right: -1px;
    z-index: -1;
    transform: skew(-30deg) rotate(-1deg) scale(1.05);
    transition: 0.2s ease-in-out;
  }
  &:hover,
  &:focus {
    color: #333;
    &:after {
      transform: skew(30deg) rotate(1deg) scale(1.1);
    }
  }
`

// ANIMATIONS
export const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`

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
`

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
`
