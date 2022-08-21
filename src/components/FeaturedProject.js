import React from 'react'

import styled from 'styled-components/macro'
import { BREAKPOINTS, LinkButton, ProjectGallery } from '../GlobalStyles'
import { ImageLoader } from '../components/ImageLoader'

import plantgeekHome1 from '../assets/plantgeek/plantgeek-homepage1.png'
import plantgeekHome2 from '../assets/plantgeek/plantgeek-homepage2.png'
import plantgeekHome3 from '../assets/plantgeek/plantgeek-homepage3.png'
import plantgeekBrowse1 from '../assets/plantgeek/plantgeek-browse1.png'
import plantgeekBrowse2 from '../assets/plantgeek/plantgeek-browse2.png'
import plantgeekBrowse3 from '../assets/plantgeek/plantgeek-browse3.png'
import plantgeekPlantProfile from '../assets/plantgeek/plantgeek-plantprofile.png'
import plantgeekUserProfile from '../assets/plantgeek/plantgeek-userprofile.png'
import plantgeekCollection from '../assets/plantgeek/plantgeek-collection.png'
import plantgeekFriends from '../assets/plantgeek/plantgeek-friends.png'
import plantgeekSettings from '../assets/plantgeek/plantgeek-settings.png'

export const FeaturedProject = () => {
  return (
    <Wrapper>
      <Description>
        <h2>
          <span className='feat'>featuring</span>
          <span className='title'>
            [ <b>plantgeek</b> ]
          </span>
        </h2>
        <p>
          Houseplants are a fairly new obsession of mine and sometimes I struggle to remember their
          various needs. My solution had been to keep a spreadsheet with information on each plant,
          such as the level of light, water, temperature, and humidity they each required.
        </p>
        <div className='primary-image'>
          <ImageLoader src={plantgeekPlantProfile} alt='' />
        </div>
        <p>
          I decided to build
          <strong> plantgeek </strong>
          as an upgrade to my spreadsheet, where you can browse and view care information for
          hundreds of plants. Users can sign up to create lists of plants they own, love, or wish to
          have and even contribute to the database. Admins can approve or reject submissions as well
          as delete plants.
        </p>
        <p>
          I started this website as a full-stack solo school project in 2021 and I have since
          continued to improve and work on it in my spare time. For more information, check out my
          code on GitHub or view the live website below.
        </p>
        <div className='links'>
          <LinkButton
            className='black'
            href='https://www.plantgeek.co'
            target='_blank'
            rel='noreferrer'>
            VIEW LIVE SITE
          </LinkButton>
          <LinkButton
            className='white'
            href='https://github.com/v-prt/plantgeek'
            target='_blank'
            rel='noreferrer'>
            VIEW ON GITHUB
          </LinkButton>
          {/* <UnderlinedLink href='https://youtu.be/_LXWqhxIMrQ' target='_blank' rel='noreferrer'>
            Video Demo
          </UnderlinedLink> */}
        </div>
      </Description>
      <ProjectGallery>
        <ImageLoader src={plantgeekHome1} alt='' />
        <ImageLoader src={plantgeekHome2} alt='' />
        <ImageLoader src={plantgeekHome3} alt='' />
        <ImageLoader src={plantgeekBrowse1} alt='' />
        <ImageLoader src={plantgeekBrowse2} alt='' />
        <ImageLoader src={plantgeekBrowse3} alt='' />
        <ImageLoader src={plantgeekUserProfile} alt='' />
        <ImageLoader src={plantgeekCollection} alt='' />
        <ImageLoader src={plantgeekFriends} alt='' />
        <ImageLoader src={plantgeekSettings} alt='' />
      </ProjectGallery>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #fff;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .wave {
    width: 100%;
    transform: rotate(180deg);
  }
`

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 2.5rem;
    margin: 50px 20px 20px 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    span {
      margin: 5px 0;
    }
    .feat {
      font-size: 1.5rem;
      color: #999;
      margin-right: 10px;
    }
    @media (max-width: 1000px) {
      font-size: 2rem;
    }
  }
  p {
    max-width: 800px;
    margin: 10px 20px;
  }
  .primary-image {
    margin: 20px 0;
  }
  .links {
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
    .links {
      flex-direction: row;
    }
  }
`
