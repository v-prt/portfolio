import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { COLORS, fadeIn } from '../GlobalStyles'
import avatar from '../assets/victoria.JPG'
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
      <Background></Background>
      <Heading>
        <div className='overlay'></div>
        <Banner>
          <Name>Victoria</Name>
          <Job>FULL-STACK WEB DEVELOPER</Job>
          <Skills>
            HTML. CSS. SCSS. JAVASCRIPT. TYPESCRIPT. REACT. REDUX. EXPRESS. NODE. MONGODB. GITHUB.
          </Skills>
        </Banner>
      </Heading>
      <Intro>
        <Image src={avatar} alt='' />
        <Text>
          <p>Hi! I'm Victoria Peart. I'm a full-stack Web Developer from West Kelowna, BC.</p>
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
          <AboutLink to='/about'>Learn more</AboutLink>
        </Text>
      </Intro>
      <img className='wave' src={wave} alt='' />
      <FeaturedProject />
      <ViewProjects />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  .wave {
    background: #1a1a1a;
    width: 100vw;
    position: relative;
  }
`

const Background = styled.div`
  background: #222;
  min-height: 100vh;
  min-width: 100vw;
  position: fixed;
  z-index: -1;
`

const Heading = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 50px);
  position: relative;
  .overlay {
    background-image: url(${pattern});
    background-size: 200px;
    opacity: 0.1;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: -1;
    @media only screen and (min-width: 500px) {
      background-size: 300px;
    }
  }
`

const Banner = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
  color: #fff;
  text-align: right;
  padding: 20px;
  margin: 10px;
  z-index: 1;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  transition: 0.2s ease;
  @media screen and (prefers-reduced-motion: reduce) {
    animation: none;
  }
  @media only screen and (min-width: 600px) {
    transform: skew(-3deg, -3deg);
    padding: 30px;
  }
`

const Name = styled.h1`
  font-family: 'Gallaudet-Regular', sans-serif;
  font-weight: 100;
  width: 100%;
  font-size: 6rem;
  line-height: 0.8;
  letter-spacing: 4px;
  @media only screen and (min-width: 500px) {
    font-size: 10rem;
  }
  @media only screen and (min-width: 1000px) {
    font-size: 14rem;
  }
`

const Job = styled.p`
  margin: 20px 0;
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 10px;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`

const Skills = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.5rem;
  font-weight: 100;
  max-width: 500px;
  margin: 0 0 0 auto;
`

const Intro = styled.section`
  background: ${COLORS.dark};
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 0 30px 0;
`

const Image = styled.img`
  filter: grayscale(100%);
  max-height: 300px;
  max-width: 300px;
  margin: 30px;
  border-radius: 50%;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  p {
    margin: 10px 30px;
    color: rgba(255, 255, 255, 0.8);
  }
`

const AboutLink = styled(Link)`
  color: #fff;
  border: 1px solid #fff;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  width: fit-content;
  margin: 20px auto;
  padding: 10px 20px;
  &:hover,
  &:focus {
    background: #fff;
    color: #000;
  }
  @media only screen and (min-width: 700px) {
    margin: 20px;
  }
`
