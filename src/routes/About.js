import { useEffect } from 'react'

import styled from 'styled-components/macro'
import { COLORS, BREAKPOINTS } from '../GlobalStyles'
import background from '../assets/bg-forest.jpg'

import { Story } from '../components/Story'
import { Skills } from '../components/Skills'
import { Employment } from '../components/Employment'
import { Education } from '../components/Education'
import { Values } from '../components/Values'
import { Contact } from '../components/Contact'

export const About = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper>
      <Background />
      <Story />
      <Skills />
      <Employment />
      <Education />
      <Values />
      <Contact />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  section {
    width: 100%;
    .section-inner {
      display: flex;
      flex-direction: column;
      margin: auto;
      padding: 80px 20px;
      &.skills,
      &.experience,
      &.education {
        max-width: 800px;
      }
    }
    .heading {
      font-size: 2rem;
      margin-bottom: 50px;
    }
    h3 {
      font-weight: bold;
      font-size: 1.6rem;
      color: ${COLORS.primaryAccent};
    }
    h4 {
      font-weight: bold;
      font-size: 1.4rem;
      margin-bottom: 20px;
      padding-top: 60px;
      border-top: 1px dotted #ccc;
      width: 100%;
      max-width: 800px;
      text-align: center;
    }
    .title {
      color: #666;
      font-weight: bold;
    }
    .date {
      color: #999;
      font-size: 0.8rem;
    }
    .text {
      p {
        margin: 20px 0;
      }
      ul {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        li {
          margin: 5px 0;
        }
      }
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.desktop}) {
    section {
      .section-inner {
        &.values {
          align-items: center;
        }
      }
    }
  }
`

const Background = styled.div`
  background: linear-gradient(#222, #444), url(${background}) center center / cover;
  background-blend-mode: saturation;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
`
