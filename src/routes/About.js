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
      <Skills />
      <Education />
      <Priorities />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(#000, #000),
    url(${background}) center center / cover;
  background-attachment: fixed;
  background-blend-mode: saturation;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;
