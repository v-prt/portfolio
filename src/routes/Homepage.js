import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS, fadeIn, rotate } from '../GlobalStyles'
import avatar from '../assets/victoria.JPG'
import { FeaturedProject } from '../components/FeaturedProject'
import { ViewProjects } from '../components/ViewProjects'
import pattern from '../assets/code.svg'

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
          <Name>Victoria Peart</Name>
          <Job>Full-Stack Web Developer</Job>
          <Skills>
            <p>html / css / javascript / typescript / php</p>
            <p>mongodb / express / react / node / mysql</p>
            <p>concordia university bootcamp alumna</p>
            <p>currently working at creator.co</p>
          </Skills>
        </Banner>
      </Heading>
      <Intro>
        <Image src={avatar} alt='' />
        <Text>
          <p>Hi! I'm Victoria. I'm a full-stack Web Developer based in West Kelowna, BC.</p>
          <p>
            As a deaf woman, I prioritize
            <strong> visual appeal, accessibility, and thoughtful UX</strong>. I enjoy working in
            environments that allow me creative freedom as well as the opportunity to improve and
            learn new skills.
          </p>
          <p>
            When I'm not coding, I'm usually playing board games or NetFlix & chilling with my best
            friend (my husband).
          </p>
          <AboutLink to='/about'>Learn more about me</AboutLink>
        </Text>
      </Intro>
      <FeaturedProject />
      <ViewProjects />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Background = styled.div`
  background: linear-gradient(${COLORS.light}, ${COLORS.medium});
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
`

const Heading = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
  .overlay {
    background-image: url(${pattern});
    background-size: 500px;
    opacity: 0.2;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: -1;
    @media only screen and (min-width: 500px) {
      background-size: 800px;
    }
  }
`

const Banner = styled.div`
  animation: ${fadeIn} 2s ease-in-out;
  color: #fff;
  text-align: center;
  height: 300px;
  padding: 30px;
  margin: auto;
  z-index: 1;
  @media screen and (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const Name = styled.h1`
  text-align: center;
  width: 100%;
  margin: 50px 0 20px 0;
  font-size: 6rem;
  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }
`

const Job = styled.p`
  margin: 20px 0;
  font-size: 2rem;
  border-bottom: 2px solid #fff;
  padding-bottom: 10px;
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`

const Skills = styled.div`
  background: ${COLORS.medium};
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 20px 0;
  overflow: hidden;
  height: 75px;
  @media only screen and (min-width: 1000px) {
    height: 50px;
  }
  p {
    font-size: 1.2rem;
    position: absolute;
    top: 0;
    opacity: 0;
    max-width: 75%;
    transform: translate3d(0px, -50px, 0px);
    animation: 12s ease-in-out infinite ${rotate};
    margin-top: 10px;
    @media (max-width: 1000px) {
      font-size: 1rem;
    }
  }
  p:nth-child(2) {
    animation-delay: 3s;
  }
  p:nth-child(3) {
    animation-delay: 6s;
  }
  p:nth-child(4) {
    animation-delay: 9s;
  }
`

const Intro = styled.section`
  background: ${COLORS.dark};
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0;
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
  }
`

const AboutLink = styled(Link)`
  background: ${COLORS.light};
  color: #fff;
  text-align: center;
  margin: 20px;
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: bold;
  &:hover,
  &:focus {
    background: ${COLORS.accent};
    color: #fff;
  }
`
