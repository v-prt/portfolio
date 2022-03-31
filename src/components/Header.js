import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { COLORS } from '../GlobalStyles'
import { BiMenu } from 'react-icons/bi'
import { SocialLinks } from './SocialLinks'

export const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Icon>
          <BiMenu />
        </Icon>
        <ul>
          <li>
            <Link to='/' exact={true}>
              HOME
            </Link>
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
      background: #fff;
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
    /* FIXME: use toggle to expand menu */
    &:hover {
      li {
        opacity: 1;
        height: 43px;
      }
    }
  }
`

const Link = styled(NavLink)`
  color: #000;
  font-size: 0.7rem;
  margin: 0 10px;
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 12px 10px 10px 10px;
  &:hover,
  &:focus {
    border: 1px solid #000;
  }
  &.active {
    background: ${COLORS.dark};
    color: #fff;
    font-weight: bold;
  }
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    border-radius: 0;
    border: 0;
    padding: 15px;
    &:hover,
    &:focus {
      border: 0;
    }
  }
`

const Icon = styled.div`
  color: ${COLORS.dark};
  margin: 0 10px;
  font-size: 1.3rem;
`
