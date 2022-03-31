import React from 'react'

import styled from 'styled-components/macro'
import { UnderlinedLink, ProjectGallery } from '../GlobalStyles'
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
          ft. [ <b>plantgeek</b> ]
        </h2>
        <p>
          Houseplants are a fairly new obsession of mine and sometimes I struggle to remember their
          various needs. My solution had been to keep a spreadsheet with information on each plant,
          such as the level of light, water, temperature, and humidity they each required.
        </p>
        <ImageLoader src={plantgeekPlantProfile} alt='' />
        <p>
          As my final project for bootcamp, I thought it would be fun to create
          <strong> plantgeek </strong>
          as an upgrade to my spreadsheet, which could also serve as a hub for houseplant lovers to
          connect with each other and share useful tips.
        </p>
        <UnderlinedLink href='https://youtu.be/_LXWqhxIMrQ' target='_blank' rel='noreferrer'>
          View demo
        </UnderlinedLink>
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
`

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 2.5rem;
    margin: 50px 20px 20px 20px;
    @media (max-width: 1000px) {
      font-size: 2rem;
    }
  }
  p {
    max-width: 800px;
    margin: 20px;
  }
  a {
    text-align: center;
  }
`
