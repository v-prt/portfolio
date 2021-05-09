import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { COLORS } from "../GlobalStyles";
import avatar from "../assets/victoria.JPG";
import background from "../assets/bg-forest1.jpg";
import { FeaturedProject } from "../components/FeaturedProject";

export const Homepage = () => {
  return (
    <Wrapper>
      <Heading>
        <Banner>
          <Name>Victoria Peart</Name>
          <Job>Full-Stack Web Dev</Job>
          <Skills>
            html / css / javascript / mongodb / express / react / redux / node
          </Skills>
        </Banner>
      </Heading>
      <Intro>
        <Image src={avatar} alt="" />
        <Text>
          <p>
            Hey! I'm Victoria. I just graduated from Concordia University's
            Full-Stack Web Dev bootcamp and I'm seeking my first official role
            as a web dev.
          </p>
          <p>
            As a deaf woman, I prioritize
            <strong> visual appeal, accessibility, and thoughtful UX</strong>. I
            enjoy working in environments that allow me creative freedom as well
            as the opportunity to learn from more experienced developers and
            improve my skills.
          </p>
          <AboutLink to="/about">Learn more about me</AboutLink>
        </Text>
      </Intro>
      <FeaturedProject />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Heading = styled.section`
  background: url(${background}) center center / cover;
  display: flex;
  align-items: flex-end;
  height: 100vh;
  width: 100%;
`;

const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

const Banner = styled.div`
  animation: ${fadeIn} 2s ease-in-out;
  background: rgba(0, 0, 0, 0.3);
  color: #c0c9ae;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Name = styled.h1`
  text-align: center;
  width: 100%;
  margin: 50px 0 20px 0;
  font-size: 6rem;
  @media (max-width: 1000px) {
    font-size: 3rem;
  }
`;

const Job = styled.p`
  margin: 20px 0;
  font-size: 2rem;
  font-weight: 200;
  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }
`;

const Skills = styled.p`
  text-align: center;
  margin: 0 20px 50px 20px;
  font-size: 0.9rem;
`;

const Intro = styled.section`
  background: linear-gradient(#202c31, ${COLORS.medium});
  color: ${COLORS.lightest};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0;
`;

const Image = styled.img`
  filter: grayscale(100%);
  max-height: 300px;
  max-width: 300px;
  margin: 30px;
  border-radius: 50%;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  p {
    margin: 20px;
  }
`;

const AboutLink = styled(Link)`
  background: ${COLORS.light};
  color: ${COLORS.dark};
  text-align: center;
  margin: 20px;
  border-radius: 10px;
  padding: 10px;
  font-weight: bold;
  &:hover {
    background: ${COLORS.dark};
    color: ${COLORS.light};
  }
`;
