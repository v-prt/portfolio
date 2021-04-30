import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { COLORS } from "../GlobalStyles";
import background from "../assets/bg-forest1.jpg";
import avatar from "../assets/victoria.JPG";
import responsiveness from "../assets/responsiveness.svg";
import accessibility from "../assets/accessibility.svg";
import style from "../assets/style.svg";

export const About = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Heading>
        <Banner>
          <Name>Victoria Peart</Name>
          <Job>Full-Stack Web Dev</Job>
          <Skills>
            html / css / javascript / react / redux / express / node / mongodb
          </Skills>
        </Banner>
      </Heading>
      <Info>
        <Image src={avatar} alt="" />
        <Text>
          <p>
            Hey! I'm Victoria. I just graduated from coding bootcamp and I'm
            officially seeking my first full-stack web dev job.
          </p>
          <p>
            As a deaf woman, I prioritize
            <strong> visual appeal, accessibility, and thoughtful UX</strong>. I
            would love to work in an environment that would allow me creative
            freedom and the opportunity to improve my new skills.
          </p>
          <p>
            My strengths lie in front-end design and I love playing around with
            CSS. I'm not as good at the math or logic side of coding, so I aim
            to study and practice wherever I can to round out my abilities.
          </p>
        </Text>
      </Info>
      {/* <Priorities>
        <h2>My Focus</h2>
        <div>
          <p>[ Responsiveness ]</p>
          <img src={responsiveness} alt="responsiveness" />
        </div>
        <div>
          <img src={accessibility} alt="assessibility" />
          <p>[ Accessibility ]</p>
        </div>
        <div>
          <p>[ Style ]</p>
          <img src={style} alt="style" />
        </div>
      </Priorities> */}
    </Wrapper>
  );
};

const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Heading = styled.section`
  background: url(${background}) center center / cover;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const Banner = styled.div`
  animation: ${fadeIn} 2s ease-in-out;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  color: #c0c9ae;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Name = styled.h1`
  margin: 50px 0 20px 0;
  width: 100%;
  text-align: center;
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
  margin: 0 0 50px 0;
  font-size: 0.9rem;
  @media (max-width: 1000px) {
    font-size: 0.6rem;
  }
`;

const Info = styled.section`
  background: linear-gradient(#202c31, ${COLORS.medium});
  color: ${COLORS.light};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  filter: grayscale(100%);
  max-width: 300px;
  margin: 40px 0 20px 0;
  border-radius: 50%;
`;

const Text = styled.div`
  width: 500px;
  p {
    line-height: 1.75;
    margin: 40px;
  }
`;

const Priorities = styled.section`
  background: #f2f2f2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 3rem;
  }
  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  img {
    width: 250px;
    margin: 30px;
  }
  p {
    font-size: 1.5rem;
  }
`;
