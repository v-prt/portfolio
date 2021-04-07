import React from "react";
import styled from "styled-components";

import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const Homepage = () => {
  return (
    <Wrapper>
      <About />
      <Projects />
      <Contact />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
