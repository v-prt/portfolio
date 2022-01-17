import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from '../GlobalStyles'
import { BiMenu } from 'react-icons/bi'
import { SocialLinks } from './SocialLinks'

export const Header = () => {
  window.onscroll = () => {
    updateProgressBar()
  }

  const updateProgressBar = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrolled = (winScroll / height) * 100
    document.getElementById('progressBar').style.width = scrolled + '%'
  }

  return (
    <Wrapper>
      <ProgressContainer>
        <ProgressBar id='progressBar' />
      </ProgressContainer>
      <Nav>
        <Icon>
          <BiMenu />
        </Icon>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/about'>ABOUT</Link>
          </li>
          <li>
            <Link to='/projects'>PROJECTS</Link>
          </li>
        </ul>
      </Nav>
      <SocialLinks />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 5px 0px;
  backdrop-filter: blur(8px);
  width: calc(100% - 40px); // accounts for padding
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 3; // accounts for higher index of a:before
  @media screen and (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const ProgressContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 5px;
  width: 100vw;
`

const ProgressBar = styled.div`
  background: linear-gradient(to right, ${COLORS.light}, ${COLORS.medium});
  height: 5px;
  width: 0%;
`

// FIXME: make menu disappear after click (on mobile, must tap outside of menu)
const Nav = styled.nav`
  div {
    display: none;
  }
  ul {
    display: flex;
  }
  @media (max-width: 600px) {
    div {
      display: block;
    }
    ul {
      background: ${COLORS.lightest};
      box-shadow: rgb(0 0 0 / 15%) 0px 4px 5px 0px;
      flex-direction: column;
      position: absolute;
      top: 45px;
      right: 0px; // accounts for header's padding
      overflow: hidden;
      z-index: 1;
      li {
        opacity: 0;
        height: 0;
        width: 100vw;
        display: flex;
        align-items: center;
        transition: 0.3s ease-in-out;
        transition-delay: 0.3s;
      }
    }
    &:hover {
      li {
        opacity: 1;
        height: 43px;
      }
    }
  }
`

const Link = styled(NavLink)`
  color: ${COLORS.dark};
  font-size: 0.7rem;
  margin: 0 10px;
  border-radius: 10px;
  padding: 12px 10px 10px 10px;
  &:hover,
  &:focus {
    background: ${COLORS.light};
  }
  &.active {
    background: ${COLORS.medium};
    color: #fff;
  }
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    border-radius: 0;
    border-bottom: 2px solid ${COLORS.lightest};
    padding: 15px;
  }
`

const Icon = styled.div`
  color: ${COLORS.dark};
  margin: 0 10px;
  font-size: 1.3rem;
  transition: 0.2s ease-in-out;
  &:hover,
  &:focus {
    color: ${COLORS.medium};
  }
`
