import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS, fadeIn } from "../GlobalStyles";
import { BiMenu } from "react-icons/bi";
import { SocialLinks } from "./SocialLinks";

export const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Icon>
          <BiMenu />
        </Icon>
        <ul>
          <li>
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
        </ul>
      </Nav>
      <SocialLinks />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  animation: ${fadeIn} 3s ease-in-out;
  background: rgba(252, 247, 243, 0.6);
  box-shadow: 0px 10px 15px -15px #999;
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
`;

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
      box-shadow: 0px 10px 20px -15px #333;
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
`;

const Link = styled(NavLink)`
  color: #333;
  font-size: 0.7rem;
  margin: 0 10px;
  border-radius: 10px;
  padding: 12px 10px 10px 10px;
  &:hover {
    background: ${COLORS.medium};
    color: #fff;
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
`;

const Icon = styled.div`
  color: #333;
  margin: 0 10px;
  font-size: 1.3rem;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${COLORS.medium};
  }
`;
