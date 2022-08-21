import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import { BREAKPOINTS, LinkButton, ProjectGallery } from '../GlobalStyles'
import { ImageLoader } from '../components/ImageLoader'

// import creatorHome from '../assets/creator/creator-home.png'
// import creatorLogin from '../assets/creator/creator-login.png'
// import collabHub from '../assets/creator/collab-hub.png'
// import collabHub2 from '../assets/creator/collab-hub2.png'

import ticketWidget1 from '../assets/ticket-widget/ticket-widget1.png'
import ticketWidget2 from '../assets/ticket-widget/ticket-widget2.png'
import ticketWidget3 from '../assets/ticket-widget/ticket-widget3.png'
import ticketWidget4 from '../assets/ticket-widget/ticket-widget4.png'
import ticketWidget5 from '../assets/ticket-widget/ticket-widget5.png'
import ticketWidget6 from '../assets/ticket-widget/ticket-widget6.png'
import ticketWidget7 from '../assets/ticket-widget/ticket-widget7.png'
import ticketWidget8 from '../assets/ticket-widget/ticket-widget8.png'
import stickerSheet from '../assets/ticket-widget/sticker-sheet.png'

import cookieHeavenGame3 from '../assets/cookie-heaven/cookie-heaven-game3.png'
import cookieClicker from '../assets/cookie-heaven/cookie-clicker.png'
import sushiHeavenHome from '../assets/cookie-heaven/sushi-heaven-home.png'
import sushiHeavenGame from '../assets/cookie-heaven/sushi-heaven-game.png'

import eagletek1 from '../assets/eagletek/eagletek1.png'
import eagletek2 from '../assets/eagletek/eagletek2.png'
import eagletek3 from '../assets/eagletek/eagletek3.png'
import eagletek4 from '../assets/eagletek/eagletek4.png'
import eagletek5 from '../assets/eagletek/eagletek5.png'
import eagletek6 from '../assets/eagletek/eagletek6.png'
import eagletek7 from '../assets/eagletek/eagletek7.png'
import eagletek8 from '../assets/eagletek/eagletek8.png'
import eagletek9 from '../assets/eagletek/eagletek9.png'

export const Projects = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper>
      <Project style={{ backgroundColor: '#f6f6f6' }}>
        <Description>
          <Title>
            <h2>
              [ <b>TicketWidget</b> ]
            </h2>
          </Title>
          <div className='summary'>
            <p className='type'>UX Design, Mobile App</p>
            <p className='duration'>Solo Project, May - August 2022</p>
          </div>
          <Details>
            <p>
              My first UX Design project completed as part of my Google UX Certification in which I
              designed a mobile app that allows users to search and purchase concert tickets
              internationally.
            </p>
            <p>
              Throughout the course of this project I learned all about user research, wireframing,
              prototyping, testing, and using Figma.
            </p>
            <div className='buttons'>
              <LinkButton
                className='black'
                href='https://www.figma.com/proto/aXXruSP5WHIyzSXOSDMc7S/TicketWidget?scaling=scale-down&page-id=137%3A1361&node-id=137%3A1442&starting-point-node-id=137%3A1442'
                target='_blank'
                rel='noreferrer'>
                View Prototype
              </LinkButton>
              <LinkButton
                className='white'
                href='https://docs.google.com/presentation/d/1VU-9AZ_CmoytlepkZCGBrDUe6OvLFeB40ww8Drj-rPE/edit?usp=sharing'
                target='_blank'
                rel='noreferrer'>
                View Case Study
              </LinkButton>
            </div>
          </Details>
        </Description>
        <ProjectGallery>
          <ImageLoader src={stickerSheet} alt='' />
          <ImageLoader src={ticketWidget1} alt='' />
          <ImageLoader src={ticketWidget2} alt='' />
          <ImageLoader src={ticketWidget3} alt='' />
          <ImageLoader src={ticketWidget4} alt='' />
          <ImageLoader src={ticketWidget5} alt='' />
          <ImageLoader src={ticketWidget6} alt='' />
          <ImageLoader src={ticketWidget7} alt='' />
          <ImageLoader src={ticketWidget8} alt='' />
        </ProjectGallery>
      </Project>

      <Project>
        <Description>
          <Title>
            <h2>
              [ <b>eagleTek</b> ]
            </h2>
          </Title>
          <div className='summary'>
            <p className='type'>Full-Stack, Desktop/Tablet/Mobile</p>
            <p className='duration'>Group Project, April 2021</p>
          </div>
          <Details>
            <p>
              A group project completed in bootcamp by myself and 2 other students in span of one
              week.
            </p>
            <p>
              As team lead for this project, it was an interesting challenge to divide our tasks
              based on our strengths and keep the design cohesive. My teammates and I created a web
              application which allows users to browse wearable tech and add to or remove products
              from their cart. Built from scratch using React, Redux, Node, and Express.
            </p>
            <LinkButton
              className='black'
              href='https://www.youtube.com/watch?v=a9O7pC1S2KI'
              target='_blank'
              rel='noreferrer'>
              View Demo
            </LinkButton>
          </Details>
        </Description>
        <ProjectGallery>
          <ImageLoader src={eagletek1} alt='' />
          <ImageLoader src={eagletek2} alt='' />
          <ImageLoader src={eagletek3} alt='' />
          <ImageLoader src={eagletek4} alt='' />
          <ImageLoader src={eagletek5} alt='' />
          <ImageLoader src={eagletek6} alt='' />
          <ImageLoader src={eagletek7} alt='' />
          <ImageLoader src={eagletek8} alt='' />
          <ImageLoader src={eagletek9} alt='' />
        </ProjectGallery>
      </Project>

      <Project style={{ backgroundColor: '#f6f6f6' }}>
        <Description>
          <Title>
            <h2>
              [ <b>Sushi Heaven</b> ]
            </h2>
          </Title>
          <div className='summary'>
            <p className='type'>Frontend, Desktop/Tablet/Mobile</p>
            <p className='duration'>Solo Project, March 2021</p>
          </div>
          <Details>
            <p>
              A spin on the classic "Cookie Clicker" browser game which started as a school project
              and has evolved over time as I kept tinkering and improving the aesthetics and
              gameplay.
            </p>
            <p>
              The goal is to make as much sushi as you can, buy upgrades and restaurants, and work
              your way up to owning a franchise. The game also automatically saves your progress so
              you can come back to it later.
            </p>
            <LinkButton
              className='black'
              href='https://sushi-heaven.netlify.app/'
              target='_blank'
              rel='noreferrer'>
              Play Game
            </LinkButton>
          </Details>
        </Description>
        <ProjectGallery>
          <ImageLoader src={sushiHeavenHome} alt='' />
          <ImageLoader src={sushiHeavenGame} alt='' />
          <ImageLoader src={cookieHeavenGame3} alt='' />
          <ImageLoader src={cookieClicker} alt='' />
        </ProjectGallery>
      </Project>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 50px;
`

const Project = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 60px 0;
  .summary {
    text-align: center;
    margin: 20px 0;
    opacity: 0.6;
    .type {
      font-weight: bold;
    }
    .duration {
      font-size: 0.8rem;
    }
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    a {
      width: 100%;
      margin: 10px;
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.tablet}) {
    .buttons {
      flex-direction: row;
    }
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 10px;
    font-size: 2.5rem;
  }
  button {
    background: #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    border-radius: 5px;
    padding: 5px 10px 3px 10px;
    transition: 0.2s ease-in-out;
    &:hover,
    &:focus {
      cursor: pointer;
      background: #ccc;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    h2 {
      font-size: 2rem;
    }
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
  p {
    max-width: 800px;
    margin: 10px 0;
  }
`
