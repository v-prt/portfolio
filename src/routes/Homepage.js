import { useEffect } from 'react'
import styled from 'styled-components/macro'
import {
  COLORS,
  BREAKPOINTS,
  LinkButton,
  Button,
  fadeIn,
  gradientAnimation,
  typing,
  blinkCaret,
  animatedGradientBorder,
} from '../GlobalStyles'
import headshot from '../assets/victoria.JPG'
import { FeaturedProject } from '../components/FeaturedProject'
import { ViewProjects } from '../components/ViewProjects'
import pattern from '../assets/code.svg'
import wave from '../assets/wave.svg'

export const Homepage = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper>
      <div className='background' />
      <section className='banner'>
        <div className='overlay' />
        <div className='heading'>
          <h1>
            <span>V</span>
            <span>I</span>
            <span>C</span>
            <span>T</span>
            <span>O</span>
            <span>R</span>
            <span>I</span>
            <span>A</span>
          </h1>
          <p className='job typewriter'>FULL-STACK DEVELOPER</p>
          <p className='skills'>
            HTML5. CSS3. SCSS. JAVASCRIPT. TYPESCRIPT. ES6. REACT. EXPRESS. NODE. MYSQL. MONGODB.
            GITHUB.
          </p>
        </div>
      </section>
      <section className='intro'>
        <div className='gradient-image-border'>
          <img className='headshot' src={headshot} alt='' />
        </div>
        <div className='text'>
          <p>Hi! I'm Victoria. I'm a full-stack Web Developer from West Kelowna, BC.</p>
          <p>
            As a deaf person, I prioritize
            <strong> visual appeal, accessibility, and thoughtful UX</strong> in coding. I most
            enjoy working on projects that allow me creative freedom as well as the opportunity to
            improve and learn new skills, especially with CSS & animations.
          </p>
          <p>
            When I'm not coding, I'm usually playing board games or Netflix & chilling with my best
            friend (my husband). I also try to go hiking whenever the weather is nice to enjoy the
            beautiful, natural landscape around us here in BC!
          </p>
          <div className='buttons'>
            <LinkButton
              className='white'
              href='https://linkedin.com/in/victoria-peart'
              target='_blank'
              rel='noopener noreferrer'>
              CONNECT
            </LinkButton>
            <Button className='black' to='/about'>
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>
      <img className='wave' src={wave} alt='' />
      <FeaturedProject />
      <ViewProjects />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  .background {
    background: #222;
    min-height: 100vh;
    min-width: 100vw;
    position: fixed;
    z-index: -1;
  }
  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    .overlay {
      background-image: url(${pattern});
      background-size: 200px;
      opacity: 0.1;
      height: 100%;
      width: 100%;
      position: fixed;
      z-index: -1;
    }
  }
  .heading {
    animation: ${fadeIn} 1s ease-in-out;
    color: #fff;
    text-align: right;
    padding: 20px;
    margin: 20px;
    z-index: 1;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    transition: 0.2s ease-in-out;
    h1 {
      background: linear-gradient(
          to right,
          ${COLORS.secondaryAccent},
          ${COLORS.primaryAccent},
          ${COLORS.secondaryAccent},
          ${COLORS.primaryAccent},
          ${COLORS.secondaryAccent},
          ${COLORS.primaryAccent},
          ${COLORS.secondaryAccent}
        )
        repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-size: 1000% 1000%;
      background-position: 105%;
      animation: ${gradientAnimation} linear 10s infinite;
      display: flex;
      justify-content: space-evenly;
      span {
        font-family: 'Gallaudet-Regular', sans-serif;
        font-weight: 100;
        font-size: 5rem;
        letter-spacing: 4px;
      }
    }
    .typewriter {
      overflow: hidden; // Ensures the content is not revealed until the animation
      border-right: 2px solid ${COLORS.secondaryAccent}; // The typwriter cursor
      white-space: nowrap; // Keeps the content on a single line
      margin: 20px 0 20px auto; // Gives that scrolling effect as the typing happens, auto should to be on the side you want to push from
      letter-spacing: 3px; // Adjust as needed
      animation: ${typing} 3.5s steps(40, end), ${blinkCaret} 0.75s step-end infinite;
    }
    .job {
      font-weight: bold;
      line-height: 1.2;
      padding-top: 5px;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      font-weight: 100;
      max-width: 500px;
      margin: 0 0 0 auto;
    }
    @media screen and (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
  .intro {
    background: ${COLORS.dark};
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 360px 0 30px 0;
    position: relative;
    .gradient-image-border {
      height: 250px;
      width: 250px;
      --borderWidth: 5px;
      border-radius: 50%;
      position: absolute;
      z-index: 1;
      top: 60px;
    }
    .gradient-image-border:after {
      content: '';
      position: absolute;
      top: calc(-1 * var(--borderWidth));
      left: calc(-1 * var(--borderWidth));
      height: calc(100% + var(--borderWidth) * 2);
      width: calc(100% + var(--borderWidth) * 2);
      background: linear-gradient(60deg, ${COLORS.secondaryAccent}, ${COLORS.primaryAccent});
      border-radius: 50%;
      z-index: -1;
      animation: ${animatedGradientBorder} 3s ease alternate infinite;
      background-size: 300% 300%;
    }
    .headshot {
      filter: grayscale(100%);
      max-height: 100%;
      max-width: 100%;
      border-radius: 50%;
    }
    .text {
      display: flex;
      flex-direction: column;
      width: 500px;
      margin: 0 20px;
      p {
        margin: 10px 0;
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .buttons {
      margin: 20px 0;
      display: flex;
      gap: 20px;
    }
  }
  .wave {
    background: #1a1a1a;
    width: 100vw;
    position: relative;
  }
  @media only screen and (min-width: ${BREAKPOINTS.tablet}) {
    .banner .overlay {
      background-size: 300px;
    }
    .heading {
      transform: skew(-3deg, -3deg);
      padding: 30px;
      h1 {
        span {
          font-size: 10rem;
        }
      }
      .job {
        font-size: 1.5rem;
      }
      .skills {
        font-size: 1.5rem;
      }
    }
    .intro {
      padding: 410px 0 40px 0;
      .gradient-image-border {
        height: 300px;
        width: 300px;
        top: 70px;
      }
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.desktop}) {
    .heading {
      h1 {
        span {
          font-size: 14rem;
        }
      }
    }
    .intro {
      padding: 480px 0 40px 0;
      .gradient-image-border {
        height: 350px;
        width: 350px;
        top: 80px;
      }
    }
  }
`
