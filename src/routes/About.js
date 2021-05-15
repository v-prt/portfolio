import { useEffect } from "react";

import styled from "styled-components";
import background from "../assets/bg-forest.jpg";

import { Education } from "../components/Education.js";
import { Skills } from "../components/Skills.js";
import { Priorities } from "../components/Priorities.js";

export const About = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Background></Background>
      <Skills />
      <Education />
      <Priorities />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  /* overscroll-behavior-y: none;
  overscroll-behavior-x: none; */
`;

const Background = styled.div`
  background: linear-gradient(#000, #000),
    url(${background}) center center / cover;
  height: 100vh;
  background-blend-mode: saturation;
  width: 100vw;
  position: fixed;
  z-index: -1;
`;
