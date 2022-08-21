import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import { LinkButton, ProjectGallery } from '../GlobalStyles'
import { ImageLoader } from '../components/ImageLoader'

// import creatorHome from '../assets/creator/creator-home.png'
// import creatorLogin from '../assets/creator/creator-login.png'
// import collabHub from '../assets/creator/collab-hub.png'
// import collabHub2 from '../assets/creator/collab-hub2.png'

import splashPage from '../assets/ticket-widget/splash-page.png'
import browseConcerts from '../assets/ticket-widget/browse-concerts.png'
import concertDetails from '../assets/ticket-widget/concert-details.png'
import purchasedTickets from '../assets/ticket-widget/purchased-tickets.png'

import cookieHeavenGame3 from '../assets/cookie-heaven/cookie-heaven-game3.png'
import cookieClicker from '../assets/cookie-heaven/cookie-clicker.png'
import sushiHeavenHome from '../assets/cookie-heaven/sushi-heaven-home.png'
import sushiHeavenGame from '../assets/cookie-heaven/sushi-heaven-game.png'

export const Projects = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper>
      {/* <Project>
        <Description>
          <Title>
            <h2>
              [ <b>creator.co</b> ]
            </h2>
          </Title>
          <Details>
            <p>
              I'm currently working as a full-time Web Developer at Creator, a platform for brands
              to effortlessly connect and collaborate with social media influencers.
            </p>
            <p>
              My responsibilities and accomplishments include maintaining our WordPress and React
              sites for brands and creators, making major design or feature updates, integrating new
              APIs, bug resolution, and more.
            </p>
            <p>
              Brands can build campaigns for platforms such as Instagram, YouTube, and TikTok,
              recruit influencers using an advanced search system (or leverage our team of Campaign
              Specialists), and view real-time analytics on their campaigns and influencer
              performance.
            </p>
            <p>
              Creators can connect their social accounts for multiple platforms, browse hundreds of
              collaboration opportunities, and filter campaigns based on their social stats or other
              personal information. Once opted in, they can view and manage their campaigns via
              their account dashboard and even chat with the brands.
            </p>
          </Details>
        </Description>
        <ProjectGallery>
          <ImageLoader src={creatorHome} alt='Creator Homepage' />
          <ImageLoader src={creatorLogin} alt='Creator Login' />
          <ImageLoader src={collabHub} alt='Collaboration Hub' />
          <ImageLoader src={collabHub2} alt='Collab Hub (using filters)' />
        </ProjectGallery>
      </Project> */}

      <Project>
        <Description>
          <Title>
            <h2>
              [ <b>ticket widget</b> ]
            </h2>
          </Title>
          <Details>
            <p>
              My UX Design portfolio project completed as part of my Google UX Certification in
              which I designed a mobile app that allows users to search and purchase concert tickets
              internationally.
            </p>
            <p>
              <i>Screenshots to come!</i>
            </p>
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
          </Details>
        </Description>
        {/* <ProjectGallery>
          <ImageLoader src={splashPage} alt='TicketWidget splash page' />
          <ImageLoader src={browseConcerts} alt='TicketWidget browse concerts page' />
          <ImageLoader src={concertDetails} alt='TicketWidget concert details page' />
          <ImageLoader src={purchasedTickets} alt='TicketWidget purchased tickets page' />
        </ProjectGallery> */}
      </Project>

      <Project>
        <Description>
          <Title>
            <h2>
              [ <b>sushi heaven</b> ]
            </h2>
          </Title>
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
              className='white'
              href='https://sushi-heaven.netlify.app/'
              target='_blank'
              rel='noreferrer'>
              Play Game
            </LinkButton>
          </Details>
        </Description>
        <ProjectGallery>
          <ImageLoader src={sushiHeavenHome} alt='Sushi Heaven Homepage' />
          <ImageLoader src={sushiHeavenGame} alt='Sushi Heaven Game' />
          <ImageLoader src={cookieHeavenGame3} alt='Cookie Heaven Game (Outdated)' />
          <ImageLoader src={cookieClicker} alt='Cookie Clicker Game (Outdated)' />
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
