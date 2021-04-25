import React from "react";
import styled from "styled-components";

import { About } from "./About";
import { Projects } from "./Projects";

export const Homepage = () => {
  return (
    <Wrapper>
      <About />
      <Projects />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
