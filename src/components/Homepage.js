import React from "react";
import styled from "styled-components";

import { About } from "./About";
import { FeaturedProject } from "./FeaturedProject";

export const Homepage = () => {
  return (
    <Wrapper>
      <About />
      <FeaturedProject />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
