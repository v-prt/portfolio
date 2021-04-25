import React from "react";
import styled, { keyframes } from "styled-components";
import background from "../assets/bg-forest.jpg";
import avatar from "../assets/victoria.jpg";

export const About = () => {
  return (
    <Wrapper>
      <Card>
        <Heading>
          <h1>Victoria Peart</h1>
          <p>Full-Stack Web Dev</p>
        </Heading>
      </Card>
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

const Card = styled.div`
  background: url(${background}) center center / cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Heading = styled.div`
  animation: ${fadeIn} 1s ease-in;
  background: rgba(0, 0, 0, 0.4);
  color: #c0c9ae;
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
  padding: 70px 30px;
  h1 {
    border-top: 1px dotted #c0c9ae;
    padding: 20px;
    font-size: 6rem;
  }
  p {
    margin-top: -15px;
    border-bottom: 1px dotted #c0c9ae;
    padding-bottom: 20px;
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
  color: #666;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Image = styled.img`
  filter: grayscale(100%);
  max-width: 300px;
  margin: 30px;
  border-radius: 50%;
`;

const Text = styled.div`
  width: 400px;
  p {
    line-height: 1.75;
    margin: 15px 0;
  }
  strong {
    font-weight: bold;
  }
`;
