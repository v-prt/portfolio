import styled from 'styled-components/macro'
import { BsFillChatSquareQuoteFill } from 'react-icons/bs'
import { fadeIn, rotate, rotateLast } from '../GlobalStyles'

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
        <p>This is the question we've all been asked as if there's only one answer.</p>
        <p>
          I've always loved <b>animals</b> and wanted to take care of them so I considered being a
          veterinarian. On second thought, <b>art</b> was one of my favorite subjects in school and
          I wanted to use my creative talents. Then again, I spent most of my free time{' '}
          <b>reading</b> and loved making up stories of my own. I truly wanted to write the next
          Harry Potter. And as a teenager, I was really into <b>video games</b> and wanted to become
          a game designer or programmer.
        </p>
        <p>
          Ultimately, my winding path and growing interest in technology as well as art led me to{' '}
          <b>web development</b>.
        </p>
      </Answer>
    </Wrapper>
  )
}

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
`

const Question = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
  background: #fff;
  color: #1a1a1a;
  position: relative;
  text-align: center;
  margin: 20px;
  border-radius: 10px;
  padding: 25px 20px 20px 20px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
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
`

const Answer = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
  max-width: 700px;
  margin: 0 20px 50px 20px;
  p {
    margin: 20px 0;
  }
`

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
`
