import styled from 'styled-components/macro'
import { BREAKPOINTS, COLORS, fadeIn, rotate, rotateLast } from '../GlobalStyles'
import headshot from '../assets/headshot1.png'

export const Story = () => {
  return (
    <Wrapper className='story'>
      <div className='inner'>
        <img className='headshot' src={headshot} alt='' />
        <div className='text'>
          <p className='about'>about</p>
          <h1 className='title'>
            [ <b>Victoria Peart</b> ]
          </h1>
          <p>Oh, hey! Glad you're here.</p>
          <p>
            I'm a full-stack developer based in West Kelowna, BC. I've always had a huge love for
            art, books, animals and nature. Growing up, I was torn between wanting to be an artist
            or author or veterinarian. Ultimately my winding path and growing interest in technology
            and design has led to my career as a developer.
          </p>
          <p>
            I really enjoy projects that allow me to use my creativity to come up with cool designs
            or to improve the user experience of a product. I’ve been working remotely for{' '}
            <a href='https://creator.co' target='_blank' rel='noopener noreferrer'>
              creator.co
            </a>{' '}
            with a small and scrappy dev team since 2021, and have many such projects under my belt.
            My coworkers call me the UX Queen. 👑
          </p>
          <p>
            When I’m not coding, I’m usually playing video games, reading, or NetFlix & chilling
            with my hubby and two cats. I also try to go hiking whenever the weather allows to enjoy
            the beautiful, natural landscape around us here in Kelowna!
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  min-height: 100vh;
  display: grid;
  place-content: center;
  .inner {
    animation: ${fadeIn} 1.5s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 100px 20px 50px 20px;
  }
  .headshot {
    filter: grayscale(100%);
    width: 100%;
    max-width: 400px;
    border-radius: 20px;
  }
  .text {
    display: flex;
    flex-direction: column;
    font-weight: 300;
    max-width: 600px;
    .about {
      color: ${COLORS.primaryAccent};
      font-size: 1.8rem;
      font-weight: bold;
      margin: 0;
    }
    .title {
      font-size: 2rem;
      margin-bottom: 20px;
    }
    p {
      margin: 10px 0;
    }
  }
  .quote-box {
    animation: ${fadeIn} 1s ease-in-out;
    background: #fff;
    color: #1a1a1a;
    position: relative;
    text-align: center;
    border-radius: 10px;
    padding: 25px 20px 20px 20px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
    font-weight: 400;
    margin-bottom: 20px;
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
  @media only screen and (min-width: ${BREAKPOINTS.tablet}) {
    .inner {
      gap: 40px;
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.desktop}) {
    .inner {
      gap: 50px;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }
  }
`
