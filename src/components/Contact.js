import React from "react";
import styled from "styled-components";
import { COLORS } from "../GlobalStyles";

export const Contact = () => {
  return (
    <Wrapper>
      <Div>
        <Heading>Interested in getting in touch?</Heading>
        <p>You may reach me at</p>
        <p>
          <a href="https://github.com/v-prt">GitHub</a> ||
          <a href="https://www.linkedin.com/in/victoria-peart/"> LinkedIn</a>
        </p>
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(
    to bottom right,
    ${COLORS.tertiary},
    ${COLORS.secondary},
    ${COLORS.primary}
  );
  height: 200px;
  p {
    color: #fff;
  }
`;

const Div = styled.div`
  margin: 50px auto;
  max-width: 800px;
  text-align: center;
`;

const Heading = styled.h2`
  color: ${COLORS.accent2};
`;
