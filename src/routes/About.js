import { useEffect } from 'react'

import styled from 'styled-components/macro'
import background from '../assets/bg-forest.jpg'

import { Story } from '../components/Story.js'
import { Skills } from '../components/Skills.js'
import { Employment } from '../components/Employment.js'
import { Education } from '../components/Education.js'
import { Priorities } from '../components/Priorities.js'

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
      <Priorities />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  margin-top: 50px;
`

const Background = styled.div`
  background: linear-gradient(#000, #000), url(${background}) center center / cover;
  background-blend-mode: saturation;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
`
