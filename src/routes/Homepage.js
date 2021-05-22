import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, fadeIn, rotate } from "../GlobalStyles";
import avatar from "../assets/victoria.JPG";
import background from "../assets/bg-forest1.jpg";
import { FeaturedProject } from "../components/FeaturedProject";

export const Homepage = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Background></Background>
      <Heading>
        <Banner>
          <Name>Victoria Peart</Name>
          <Job>Full-Stack Web Dev</Job>
          <Skills>
            <p>html / css / javascript</p>
            <p>mongodb / express / react / redux / node</p>
            <p>gamer, nature enthusiast, wannabe minimalist</p>
            <p>
              will do <b>pro bono work</b> for animal welfare
            </p>
          </Skills>
        </Banner>
      </Heading>
      <Intro>
        <Image src={avatar} alt="" />
        <Text>
          <p>
            Hey! I'm Victoria. I'm a full-stack web developer, living and
            breathing in beautiful British Columbia, Canada.
          </p>
          <p>
            As a deaf woman, I prioritize
            <strong> visual appeal, accessibility, and thoughtful UX</strong>. I
            enjoy working in environments that allow me creative freedom as well
            as the opportunity to improve and learn new skills.
          </p>
          <p>
            When I'm not coding, I'm usually playing video games or immersing
            myself in nature on a hike through the woods.
          </p>
          <AboutLink to="/about">Learn more about me</AboutLink>
        </Text>
      </Intro>
      <FeaturedProject />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  /* this causes problems on mobile browsers */
  /* background-attachment: fixed; */
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Background = styled.div`
  background: url(${background}) center center / cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
`;

const Heading = styled.section`
  display: flex;
  align-items: flex-end;
  height: 100vh;
  width: 100%;
`;

const Banner = styled.div`
  animation: ${fadeIn} 2s ease-in-out;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  color: #c0c9ae;
  text-align: center;
  height: 300px;
  width: 100%;
  padding: 30px 0 50px 0;
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
  font-style: italic;
  margin: 20px 0;
  font-size: 2rem;
  font-weight: 200;
  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 50px 0;
  p {
    font-size: 1.2rem;
    position: absolute;
    top: 0;
    opacity: 0;
    max-width: 75%;
    transform: translate3d(0px, -50px, 0px);
    animation: 12s ease-in-out infinite ${rotate};
  }
  p:nth-child(2) {
    animation-delay: 3s;
  }
  p:nth-child(3) {
    animation-delay: 6s;
  }
  p:nth-child(4) {
    animation-delay: 9s;
  }
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
    margin: 10px 20px;
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
