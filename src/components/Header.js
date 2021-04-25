import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../GlobalStyles";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
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
      </SocialLinks>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: rgba(250, 250, 250, 0.6);
  backdrop-filter: blur(8px);
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // TODO: figure out why link goes behind profile image without this
  z-index: 1;
`;

const Nav = styled.nav`
  margin: 10px 20px;
`;

const Link = styled(NavLink)`
  color: #000;
  font-size: 0.9rem;
  margin: 0 10px;
  border-radius: 5px;
  padding: 5px;
  &:hover {
    background: ${COLORS.medium};
    color: #fff;
  }
  &.active {
    background: ${COLORS.medium};
    color: #fff;
  }
`;

const SocialLinks = styled.div`
  margin: 10px 20px;
  display: flex;
`;

const Icon = styled.div`
  color: #000;
  margin: 0 10px;
  font-size: 1.5rem;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${COLORS.medium};
  }
`;
