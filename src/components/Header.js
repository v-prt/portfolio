import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { COLORS } from "../GlobalStyles";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BiMenu } from "react-icons/bi";

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
      <SocialLinks>
        <a href="https://github.com/v-prt">
          <Icon>
            <FaGithub />
          </Icon>
        </a>
        <a href="https://www.linkedin.com/in/victoria-peart/">
          <Icon>
            <FaLinkedin />
          </Icon>
        </a>
        <a href="https://www.twitter.com/vikki_peart">
          <Icon>
            <FaTwitter />
          </Icon>
        </a>
        <a href="mailto:v-peart@outlook.com">
          <Icon>
            <GrMail />
          </Icon>
        </a>
      </SocialLinks>
    </Wrapper>
  );
};

const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

const Wrapper = styled.header`
  animation: ${fadeIn} 3s ease-in-out;
  background: rgba(252, 247, 243, 0.6);
  box-shadow: 0px 10px 15px -15px #999;
  backdrop-filter: blur(8px);
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // TODO: figure out why link goes behind profile image without this
  z-index: 1;
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
      background: ${COLORS.light};
      position: absolute;
      top: 45px;
      flex-direction: column;
      visibility: hidden;
      opacity: 0;
      // FIXME: menu shows briefly when sizing down the window
      transition: 0.2s ease-in-out;
      transition-delay: 0.3s;
      li {
        width: 100vw;
        display: flex;
        align-items: center;
        text-align: center;
      }
    }
    &:hover {
      ul {
        visibility: visible;
        opacity: 100%;
        box-shadow: 0px 10px 20px -15px #333;
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
    border-bottom: 2px solid ${COLORS.light};
    padding: 15px;
  }
`;

const SocialLinks = styled.div`
  margin: 10px 20px;
  display: flex;
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
