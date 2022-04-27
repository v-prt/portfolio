import { Link } from 'react-router-dom'
import styled, { createGlobalStyle, keyframes } from 'styled-components/macro'
import GallaudetRegularWoff from './assets/fonts/Gallaudet-Regular/font.woff'
import GallaudetRegularWoff2 from './assets/fonts/Gallaudet-Regular/font.woff2'

export const COLORS = {
  dark: '#1a1a1a',
  medium: '#333',
  light: '#ae8eb4',
  // accent: '#ff8533',
  accent: '#9966ff',
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
      color: #1a1a1a;
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
  &.black {
    background: #1a1a1a;
    color: #fff;
    border-color: #fff;
    &:hover,
    &:focus {
      box-shadow: -3px -3px 0 ${COLORS.accent};
      transform: translate(3px, 3px);
    }
  }
  &.white {
    color: #1a1a1a;
    border-color: #1a1a1a;
    &:hover,
    &:focus {
      box-shadow: -3px -3px 0 #1a1a1a;
      transform: translate(3px, 3px);
    }
  }
`

export const StyledLink = styled(Link)`
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
  &.black {
    background: #1a1a1a;
    color: #fff;
    border-color: #fff;
    &:hover,
    &:focus {
      box-shadow: -3px -3px 0 ${COLORS.accent};
      transform: translate(3px, 3px);
    }
  }
  &.white {
    color: #1a1a1a;
    border-color: #1a1a1a;
    &:hover,
    &:focus {
      box-shadow: -3px -3px 0 #1a1a1a;
      transform: translate(3px, 3px);
    }
  }
`

export const ProjectGallery = styled.div`
  display: flex;
  grid-gap: 20px;
  width: calc(100% - 40px);
  overflow-x: scroll;
  margin: 20px 0;
  padding: 20px 10px;
  ::-webkit-scrollbar {
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
    cursor: pointer;
  }
`

export const UnderlinedLink = styled.a`
  color: #000;
  font-weight: bold;
  position: relative;
  z-index: 1;
  &:after {
    background: #ccc;
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
    &:after {
      background: ${COLORS.accent};
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
