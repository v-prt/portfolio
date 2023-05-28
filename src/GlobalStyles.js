import { Link } from 'react-router-dom'
import styled, { createGlobalStyle, keyframes } from 'styled-components/macro'
import GallaudetRegularWoff from './assets/fonts/Gallaudet-Regular/font.woff'
import GallaudetRegularWoff2 from './assets/fonts/Gallaudet-Regular/font.woff2'

export const COLORS = {
  dark: '#1a1a1a',
  medium: '#333',
  light: '#ae8eb4',
  secondaryAccent: '#ff8533',
  primaryAccent: '#9966ff',
}

export const BREAKPOINTS = {
  tablet: '768px',
  desktop: '1000px',
}

export default createGlobalStyle`
    @font-face {
      font-family: 'Gallaudet-Regular';
      src:
        url(${GallaudetRegularWoff}) format('woff'),
        url(${GallaudetRegularWoff2}) format('woff2');
        font-display: block;
    }
    * {
      font-family: 'Spartan', sans-serif;
      line-height: 1;
      margin: 0;
      padding: 0;
      border: 0;
    }
    html, body {
      color: ${COLORS.dark};
      overflow-x: hidden;
      overscroll-behavior-y: none;
      overscroll-behavior-x: none;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    #root {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    }
    h1, h2, h3 {
      letter-spacing: 1px;
      font-weight: 200;
      line-height: 1.5;
    }
    p {
      line-height: 1.75;
    }
    ol, ul {
      list-style: none;
    }
    a {
      color: ${COLORS.primaryAccent};
      text-decoration: none;
      transition: 0.2s ease-in-out;
    }
    .link {
      border-bottom: 1px solid transparent;
      &:hover {
        border-color: ${COLORS.primaryAccent};
      }
    }
    strong {
      font-weight: bold;
  }
`

// STYLED COMPONENTS
export const LinkButton = styled.a`
  background: transparent;
  border: 1px solid;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  width: fit-content;
  padding: 12px 20px 10px 20px;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 10px 0;
  white-space: pre;
  &.black {
    background: ${COLORS.dark};
    color: #fff;
    border-color: #fff;
    @media (hover: hover) {
      &:hover,
      &:focus {
        box-shadow: -3px -3px 0 ${COLORS.primaryAccent};
        transform: translate(3px, 3px);
      }
    }
  }
  &.white {
    background: #fff;
    color: ${COLORS.dark};
    border-color: ${COLORS.dark};
    @media (hover: hover) {
      &:hover,
      &:focus {
        box-shadow: -3px -3px 0 ${COLORS.secondaryAccent};
        transform: translate(3px, 3px);
      }
    }
  }
`

export const Button = styled(Link)`
  background: transparent;
  border: 1px solid;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  width: fit-content;
  padding: 12px 20px 10px 20px;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 10px 0;
  white-space: pre;
  &.black {
    background: ${COLORS.dark};
    color: #fff;
    border-color: #fff;
    @media (hover: hover) {
      &:hover,
      &:focus {
        box-shadow: -3px -3px 0 ${COLORS.primaryAccent};
        transform: translate(3px, 3px);
      }
    }
  }
  &.white {
    background: #fff;
    color: ${COLORS.dark};
    border-color: ${COLORS.dark};
    @media (hover: hover) {
      &:hover,
      &:focus {
        box-shadow: -3px -3px 0 ${COLORS.secondaryAccent};
        transform: translate(3px, 3px);
      }
    }
  }
`

export const ProjectWrapper = styled.main`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .banner {
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 100%;
      margin-top: auto;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 20px;
    padding-bottom: 60px;
    .featuring {
      color: ${COLORS.primaryAccent};
      font-size: 1.8rem;
      font-weight: bold;
    }
    .title {
      font-size: 2rem;
      margin-bottom: 20px;
    }
  }
  .summary {
    margin: 20px 0;
    .type {
      color: #666;
      font-weight: bold;
    }
    .duration {
      color: #666;
      font-size: 0.8rem;
    }
    .collaborators {
      color: #999;
      margin-top: 20px;
      font-size: 0.8rem;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin: 10px 0;
    }
  }
  .mockups {
    width: 100%;
    margin: 40px 0;
  }
  .video {
    width: 100%;
    height: auto;
    aspect-ratio: 5/3;
    border-radius: 10px;
    box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    a {
      width: 100%;
      margin: 10px;
    }
  }
  .primary-image {
    margin: 40px 0;
    img {
      height: 300px;
      border-radius: 10px;
      box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.tablet}) {
    .banner {
      height: 250px;
    }
    .description {
      padding-bottom: 80px;
      .title {
        font-size: 2.5rem;
      }
    }
    .buttons {
      flex-direction: row;
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.desktop}) {
    .banner {
      height: 300px;
      padding-top: 50px;
    }
    .description {
      padding-bottom: 100px;
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

// text gradient
export const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 108% 50%;
  }
`

// typing effect
export const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`

// typewriter cursor
export const blinkCaret = keyframes` 
  from, to { border-color: transparent }
  50% { border-color: ${COLORS.secondaryAccent}; }
`

export const animatedGradientBorder = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`
