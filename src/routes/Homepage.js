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
} from '../GlobalStyles'
import headshot from '../assets/headshot.jpg'
import { FeaturedProject } from '../components/FeaturedProject'
import { ViewAllProjects } from '../components/ViewAllProjects'
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
        <img className='headshot' src={headshot} alt='' />
        <div className='text'>
          <h2>Hey! I'm Victoria, that deaf dev.</h2>
          <p>
            I’m a full-stack developer with a particular knack for design. I have been coding for 2+
            years, and I recently obtained my UX Design certification from Google.
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
          <p>
            If you’d like to get in touch, email me at{' '}
            <a href='mailto:victoriapeart.dev@gmail.com' target='_blank' rel='noopener noreferrer'>
              victoriapeart.dev@gmail.com
            </a>{' '}
            or connect with me on LinkedIn.
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
      <ViewAllProjects />
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
    display: grid;
    place-content: center;
    gap: 30px;
    padding: 80px 20px;
    .headshot {
      filter: grayscale(100%);
      width: 100%;
      max-width: 400px;
      border-radius: 20px;
      margin: auto;
    }
    .text {
      display: flex;
      flex-direction: column;
      h2 {
        margin: 10px 0;
        font-weight: bold;
      }
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
      padding: 100px 20px;
      gap: 40px;
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
      display: flex;
      align-items: flex-start;
      gap: 50px;
      .headshot {
        margin: 0;
      }
      .text {
        max-width: 600px;
      }
    }
  }
`
