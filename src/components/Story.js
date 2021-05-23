import styled from "styled-components";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { rotate, rotateLast } from "../GlobalStyles";

export const Story = () => {
  return (
    <Wrapper>
      <Question>
        <div>
          <BsFillChatSquareQuoteFill />
        </div>
        <p>
          <em>Who do you want to be when you grow up?</em>
        </p>
      </Question>
      <Answer>
        <CareerOptions>
          <p>The Veterinarian ❔</p>
          <p>The Artist ❔</p>
          <p>The Author ❔</p>
          <p>
            <strong>The Web Developer ✓</strong>
          </p>
        </CareerOptions>
        <p>
          This is the question we've all been asked as if there's only one
          answer.
        </p>
        <p>
          I've always loved <b>animals</b> and wanted to take care of them so I
          considered being a veterinarian. On second thought, <b>art</b> was one
          of my favorite subjects in school and I wanted to use my creative
          talents. Then again, I spent most of my free time <b>reading</b> (I
          remember one day in elementary school I became so absorbed in a book I
          didn't even notice when class ended) and loved making up stories of my
          own. I truly wanted to write the next Harry Potter. And at some point,
          I got really into <b>video games</b> and wanted to be a game designer
          or programmer.
        </p>
        <p>
          Ultimately, my winding path and growing interest in technology led to
          me to pursue career in <b>web development</b> but who I am carries
          forward aspects of all the whos I wanted to be.
        </p>
      </Answer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 80px 0 0 0;
  font-weight: 300;
`;

const Question = styled.div`
  background: #fff;
  color: #000;
  position: relative;
  text-align: center;
  margin: 20px;
  border-radius: 10px;
  padding: 25px 20px 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 5px 5px 5px;
  font-size: 2rem;
  font-weight: 500;
  div {
    background: #fff;
    border-radius: 4px;
    position: absolute;
    top: -17px;
    left: calc(50% - 10px);
  }
  p {
    font-size: 1.1rem;
  }
`;

const Answer = styled.div`
  max-width: 800px;
  margin: 0 20px 50px 20px;
  p {
    text-align: center;
    margin: 20px 0;
  }
`;

const CareerOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 80px;
  p {
    font-size: 1.4rem;
    position: absolute;
    top: 0;
    opacity: 0;
    max-width: 75%;
    transform: translate3d(0px, -50px, 0px);
    animation: 12s ease-in-out ${rotate};
    animation-iteration-count: 1;
  }
  p:nth-child(1) {
    animation-delay: 1s;
  }
  p:nth-child(2) {
    animation-delay: 4s;
  }
  p:nth-child(3) {
    animation-delay: 7s;
  }
  p:nth-child(4) {
    animation: 3s ease-in-out ${rotateLast};
    animation-delay: 10s;
    animation-fill-mode: forwards;
  }
  @media (max-width: 500px) {
    p {
      font-size: 1.1rem;
    }
  }
`;
