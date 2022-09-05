import styled from 'styled-components/macro'
import { BsFillChatSquareQuoteFill } from 'react-icons/bs'
import { COLORS, fadeIn, rotate, rotateLast } from '../GlobalStyles'

export const Story = () => {
  return (
    <Wrapper>
      <div className='quote-box'>
        <div className='icon'>
          <BsFillChatSquareQuoteFill />
        </div>
        <p>
          <em>Who do you want to be when you grow up?</em>
        </p>
      </div>
      <div className='text'>
        <div className='rotating-text'>
          <p>The Veterinarian?</p>
          <p>The Artist?</p>
          <p>The Author?</p>
          <p>
            <strong>The Developer.</strong>
          </p>
        </div>
        <p>
          I've always had a huge love for art, books, animals and nature. Growing up, I was torn
          between wanting to be an artist or author or veterinarian. Ultimately my winding path and
          growing interest in technology and design has led to my career as a developer. I enjoy the
          constant challenge of learning new things, and the satisfaction of creating something from
          scratch!
        </p>
      </div>
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
  .quote-box {
    animation: ${fadeIn} 1s ease-in-out;
    background: #fff;
    color: #1a1a1a;
    position: relative;
    text-align: center;
    margin: 20px;
    border-radius: 10px;
    padding: 25px 20px 20px 20px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
    font-weight: 400;
    .icon {
      background: #fff;
      color: ${COLORS.primaryAccent};
      border-radius: 10px;
      position: absolute;
      top: -17px;
      left: calc(50% - 10px);
      font-size: 2rem;
    }
  }
  .text {
    animation: ${fadeIn} 1.5s ease-in-out;
    max-width: 800px;
    margin: 20px;
    p {
      margin: 20px 0;
    }
  }
  .rotating-text {
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
      animation: 11s ease-in-out ${rotate};
      animation-iteration-count: 1;
    }
    p:nth-child(1) {
      animation-delay: 0s;
    }
    p:nth-child(2) {
      animation-delay: 3s;
    }
    p:nth-child(3) {
      animation-delay: 6s;
    }
    p:nth-child(4) {
      animation: 1s ease-in-out ${rotateLast};
      animation-delay: 9s;
      animation-fill-mode: forwards;
    }
    @media (max-width: 500px) {
      p {
        font-size: 1.1rem;
      }
    }
  }
`
