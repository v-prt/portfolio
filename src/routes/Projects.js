import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { COLORS, UnderlinedLink, ProjectGallery } from '../GlobalStyles'
import { BiChevronDown } from 'react-icons/bi'
import { ImageLoader } from '../components/ImageLoader'

import creatorHome from '../assets/creator/creator-home.png'

import eagletekHome from '../assets/eagleTek/eagletek-home.png'
import eagletekPagination from '../assets/eagleTek/eagletek-pagination.png'
import eagletekCategories from '../assets/eagleTek/eagletek-categories.png'
import eagletekLogin from '../assets/eagleTek/eagletek-login.png'
import eagletekEmptyCart from '../assets/eagleTek/eagletek-emptycart.png'
import eagletekCart from '../assets/eagleTek/eagletek-cart.png'
import eagletekDesktopDropdown from '../assets/eagleTek/eagletek-desktop-dropdown.png'
import eagletekMobileDropdown from '../assets/eagleTek/eagletek-mobile-dropdown.png'
import eagletekAbout from '../assets/eagleTek/eagletek-about.png'

import meowspaceHome1 from '../assets/meowspace/meowspace-homepage.png'
import meowspaceHome2 from '../assets/meowspace/meowspace-homepage2.png'
import meowspaceLogin from '../assets/meowspace/meowspace-login.png'
import meowspaceProfile1 from '../assets/meowspace/meowspace-profile.png'
import meowspaceProfile2 from '../assets/meowspace/meowspace-profile2.png'
import facespace from '../assets/meowspace/facespace.png'

import cookieHeavenGame3 from '../assets/cookie-heaven/cookie-heaven-game3.png'
import cookieClicker from '../assets/cookie-heaven/cookie-clicker.png'
import sushiHeavenHome from '../assets/cookie-heaven/sushi-heaven-home.png'
import sushiHeavenGame from '../assets/cookie-heaven/sushi-heaven-game.png'

export const Projects = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [creator, setCreator] = useState(undefined)
  const [eagleTek, setEagleTek] = useState(undefined)
  const [meowspace, setMeowspace] = useState(undefined)
  const [cookieHeaven, setCookieHeaven] = useState(undefined)

  return (
    <Wrapper>
      <Project>
        <Description>
          <Title>
            <h2>
              [ <b>creator.co</b> ]
            </h2>
            <button
              onClick={() => {
                setCreator(!creator)
              }}>
              <Icon $rotate={creator}>
                <BiChevronDown />
              </Icon>
              project details
            </button>
          </Title>
          <Details visible={creator}>
            <p>More screenshots and details coming soon!</p>
          </Details>
        </Description>
        <ProjectGallery>
          <ImageLoader src={creatorHome} alt={''} />
        </ProjectGallery>
      </Project>
      <Project>
        <Description>
          <Title>
            <h2>
              [ <b>Sushi Heaven</b> ]
            </h2>
            <button
              onClick={() => {
                setCookieHeaven(!cookieHeaven)
              }}>
              <Icon $rotate={cookieHeaven}>
                <BiChevronDown />
              </Icon>
              project details
            </button>
          </Title>
          <Details visible={cookieHeaven}>
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
            <p>
              <UnderlinedLink
                href='https://sushi-heaven.netlify.app/'
                target='_blank'
                rel='noreferrer'>
                Play Game
              </UnderlinedLink>
            </p>
          </Details>
        </Description>
        <ProjectGallery>
          <ImageLoader src={sushiHeavenHome} alt='' />
          <ImageLoader src={sushiHeavenGame} alt='' />
          <ImageLoader src={cookieHeavenGame3} alt='' />
          <ImageLoader src={cookieClicker} alt='' />
        </ProjectGallery>
      </Project>
      <Project>
        <Description>
          <Title>
            <h2>
              [ <b>eagleTek</b> ]
            </h2>
            <button
              onClick={() => {
                setEagleTek(!eagleTek)
              }}>
              <Icon $rotate={eagleTek}>
                <BiChevronDown />
              </Icon>
              project details
            </button>
          </Title>
          <Details visible={eagleTek}>
            <div>
              <em>Collaborators : </em>
              <p>
                <b>Myself</b> (Team Lead, Frontend)
              </p>
              <p>
                <a
                  className='collaborator'
                  href='https://www.linkedin.com/in/andrew-fenrich/'
                  target='_blank'
                  rel='noreferrer'>
                  Andrew Fenrich
                </a>{' '}
                (Backend)
              </p>
              <p>
                <a
                  className='collaborator'
                  href='https://mariiesmall.com/'
                  target='_blank'
                  rel='noreferrer'>
                  Marie Petit
                </a>{' '}
                (Frontend)
              </p>
            </div>
            <p>
              This group project was completed over the course of one week as part of our coding
              bootcamp, in which we developed an e-commerce website for wearable tech and designed
              the front as well as back-end.
            </p>
            <p>
              As team lead, my focus was on dividing our tasks fairly while keeping the app design
              cohesive and responsive. The most difficult part of this project was working around
              other people's code but it was truly rewarding to see all our pieces come together!
            </p>
            <p>
              <UnderlinedLink
                href='https://www.youtube.com/watch?v=a9O7pC1S2KI'
                target='_blank'
                rel='noreferrer'>
                View Demo
              </UnderlinedLink>
            </p>
          </Details>
        </Description>
        <ProjectGallery>
          <ImageLoader src={eagletekHome} alt='' />
          <ImageLoader src={eagletekPagination} alt='' />
          <ImageLoader src={eagletekCategories} alt='' />
          <ImageLoader src={eagletekLogin} alt='' />
          <ImageLoader src={eagletekEmptyCart} alt='' />
          <ImageLoader src={eagletekCart} alt='' />
          <ImageLoader src={eagletekDesktopDropdown} alt='' />
          <ImageLoader src={eagletekMobileDropdown} alt='' />
          <ImageLoader src={eagletekAbout} alt='' />
        </ProjectGallery>
      </Project>
      <Project>
        <Description>
          <Title>
            <h2>
              [ <b>meowspace</b> ]
            </h2>
            <button
              onClick={() => {
                setMeowspace(!meowspace)
              }}>
              <Icon $rotate={meowspace}>
                <BiChevronDown />
              </Icon>
              project details
            </button>
          </Title>
          <Details visible={meowspace}>
            <p>
              This was a fun little 3-day project in which I had to recreate "Facespace" from a
              provided mock-up. The original used an ugly orange theme and creepy computer-generated
              images. Once I'd completed the MVP requirements, I took some extra time to upgrade the
              look of the app by replacing the "humans" with cats and changing the color scheme,
              name, and layout.
            </p>
          </Details>
        </Description>
        <ProjectGallery>
          <ImageLoader src={meowspaceHome1} alt='' />
          <ImageLoader src={meowspaceLogin} alt='' />
          <ImageLoader src={meowspaceHome2} alt='' />
          <ImageLoader src={meowspaceProfile1} alt='' />
          <ImageLoader src={meowspaceProfile2} alt='' />
          <ImageLoader src={facespace} alt='' />
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
  margin: 40px 0;
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

const Icon = styled.div`
  // $rotate is a transient prop, needed to remove error
  transform: ${props => (props.$rotate ? '' : 'rotate(-90deg)')};
  font-size: 1.3rem;
  margin-right: 5px;
  transition: 0.1s ease-in-out;
`

const Details = styled.div`
  opacity: ${props => (props.visible ? '1' : '0')};
  max-height: ${props => (props.visible ? '1000px' : '0')};
  text-align: center;
  transition: 0.5s ease-in-out;
  div {
    margin-top: 20px;
    p {
      margin: 10px;
    }
  }
  p {
    max-width: 800px;
    margin: 20px;
  }
  .collaborator {
    color: ${COLORS.medium};
    font-weight: bold;
    &:hover,
    &:focus {
      color: ${COLORS.accent};
    }
  }
`
