import React from "react";
import styled, { keyframes } from "styled-components";
import { COLORS } from "../GlobalStyles";
import background from "../assets/bg-forest.jpg";
import avatar from "../assets/victoria.JPG";

export const About = () => {
  return (
    <Wrapper>
      <Heading>
        <Banner>
          <Title>
            <h1>Victoria Peart</h1>
            <p>Full-Stack Web Dev</p>
          </Title>
        </Banner>
      </Heading>
      <Info>
        <Image src={avatar} alt="" />
        <Text>
          <p>
            Hey! I just graduated from coding bootcamp and I'm officially
            seeking my first full-stack web dev job.
          </p>
          <p>
            As a deaf woman, I prioritize{" "}
            <strong>visual appeal, accessibility, and thoughtful UX</strong>. I
            would love to work in an environment that would allow me creative
            freedom and the opportunity to improve my new skills.
          </p>
          <p>
            My strengths lay in front-end design and I love playing around with
            CSS. I'm not as good at the math or logic side of coding, so I aim
            to study and practice wherever I can to round out my abilities.
          </p>
        </Text>
      </Info>
    </Wrapper>
  );
};

const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.div`
  background: url(${background}) center center / cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-end;
`;

const Banner = styled.div`
  animation: ${fadeIn} 1.5s ease-in;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-bottom: 70px;
`;

const Title = styled.div`
  color: #c0c9ae;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px dotted #c0c9ae;
  border-bottom: 1px dotted #c0c9ae;
  padding: 20px 0;
  h1 {
    margin-bottom: 20px;
    font-size: 6rem;
  }
  p {
    font-size: 2rem;
    font-weight: 200;
  }
  // TABLET & MOBILE
  @media (max-width: 1000px) {
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

const Info = styled.div`
  color: ${COLORS.light};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const Image = styled.img`
  filter: grayscale(100%);
  max-width: 300px;
  margin: 50px;
  border-radius: 50%;
`;

const Text = styled.div`
  width: 400px;
  p {
    line-height: 1.75;
    margin: 15px 0;
  }
`;
