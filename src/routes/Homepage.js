import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { COLORS, fadeIn } from '../GlobalStyles'
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
          <Name>
            Victoria
            <br />
            Peart
          </Name>
          <Job>FULL-STACK WEB DEVELOPER</Job>
          <Skills>
            HTML. CSS. SCSS. JAVASCRIPT. TYPESCRIPT. PHP. REACT. REDUX. EXPRESS. NODE. GITHUB.
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
          <AboutLink to='/about'>Learn more</AboutLink>
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
  background: #222;
  min-height: 100vh;
  min-width: 100vw;
  position: fixed;
  z-index: -1;
`

const Heading = styled.section`
  display: flex;
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
    @media only screen and (min-width: 500px) {
      background-size: 300px;
    }
  }
`

const Banner = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
  color: #fff;
  text-align: right;
  padding: 30px;
  margin: auto 20px auto auto;
  z-index: 1;
  @media screen and (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const Name = styled.h1`
  width: 100%;
  font-size: 6rem;
  @media (max-width: 1000px) {
    font-size: 4rem;
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
`

// const Skills = styled.div`
//   background: ${COLORS.medium};
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   margin: 20px 0;
//   overflow: hidden;
//   height: 75px;
//   @media only screen and (min-width: 1000px) {
//     height: 50px;
//   }
//   p {
//     font-size: 1.2rem;
//     position: absolute;
//     top: 0;
//     opacity: 0;
//     max-width: 75%;
//     transform: translate3d(0px, -50px, 0px);
//     animation: 12s ease-in-out infinite ${rotate};
//     margin-top: 10px;
//     @media (max-width: 1000px) {
//       font-size: 1rem;
//     }
//   }
//   p:nth-child(2) {
//     animation-delay: 3s;
//   }
//   p:nth-child(3) {
//     animation-delay: 6s;
//   }
//   p:nth-child(4) {
//     animation-delay: 9s;
//   }
// `

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
