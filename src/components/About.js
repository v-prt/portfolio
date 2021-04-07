import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../GlobalStyles";
import { BsArrowRightShort } from "react-icons/bs";

export const About = () => {
  return (
    <Wrapper>
      <Text>
        <Greeting>Hey, I'm Victoria!</Greeting>
        <Blurb>
          <p>Lorem ipsum dolor sit amet. </p>
          <p>
            Now this is a story all about how my life got flipped, turned upside
            down. I'd like to take a minute, just sit right there. I'll tell you
            all about{" "}
            <Link to="#">
              how I became a web developer <BsArrowRightShort />
            </Link>
          </p>
          <Disclaimer>Disclaimer: site still under construction!</Disclaimer>
        </Blurb>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(
    to bottom right,
    ${COLORS.primary},
    ${COLORS.secondary},
    ${COLORS.tertiary}
  );
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.div`
  color: white;
  margin: 50px;
  max-width: 800px;
`;

const Greeting = styled.h2`
  color: ${COLORS.accent1};
  font-size: 3rem;
  margin-bottom: 30px;
`;

const Blurb = styled.div`
  font-size: 1.1rem;
  p {
    margin: 20px 0;
  }
`;

const Disclaimer = styled.p`
  color: ${COLORS.accent2};
  font-style: italic;
`;
