import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../GlobalStyles";
import { BsArrowRightShort } from "react-icons/bs";
import VictoriaSrc from "../assets/victoria.JPG";

export const About = () => {
  return (
    <Wrapper>
      <Image src={VictoriaSrc} alt="" />
      <Text>
        <Greeting>Hey, I'm Victoria</Greeting>
        <Blurb>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Now this is a story all about how my life got flipped, turned upside
            down. I'd like to take a minute, just sit right there. I'll tell you
            all about
            <Link to="">
              {" "}
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Image = styled.img`
  max-width: 300px;
  border-radius: 50%;
  filter: grayscale(100%);
  margin: 20px;
`;

const Text = styled.div`
  color: rgba(255, 255, 255, 0.8);
  max-width: 400px;
  margin: 20px;
`;

const Greeting = styled.h2`
  color: ${COLORS.accent1};
  font-size: 3rem;
  margin-bottom: 30px;
`;

const Blurb = styled.div`
  p {
    margin: 20px 0;
  }
`;

const Disclaimer = styled.p`
  color: ${COLORS.accent2};
  font-style: italic;
`;
