import { useEffect } from 'react'
import { ProjectWrapper, LinkButton } from '../../GlobalStyles'
import { Carousel } from '../../components/Carousel'
import wave from '../../assets/white-wave.svg'

import image1 from '../../assets/plantgeek/plantgeek-homepage1.png'
import image2 from '../../assets/plantgeek/plantgeek-homepage2.png'
import image3 from '../../assets/plantgeek/plantgeek-homepage3.png'
import image4 from '../../assets/plantgeek/plantgeek-browse1.png'
import image5 from '../../assets/plantgeek/plantgeek-browse2.png'
import image6 from '../../assets/plantgeek/plantgeek-browse3.png'
import image7 from '../../assets/plantgeek/plantgeek-plantprofile.png'
import image8 from '../../assets/plantgeek/plantgeek-userprofile.png'
import image9 from '../../assets/plantgeek/plantgeek-collection.png'
import image10 from '../../assets/plantgeek/plantgeek-friends.png'
import image11 from '../../assets/plantgeek/plantgeek-settings.png'

export const Plantgeek = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projectImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ]

  return (
    <ProjectWrapper>
      <div className='banner' style={{ background: 'linear-gradient(to right, #92D265, #5D9E2E)' }}>
        <img src={wave} alt='' />
      </div>
      <div className='description'>
        <h2 className='title'>
          [ <b>plantgeek</b> ]
        </h2>
        <div className='summary'>
          <p className='type'>Full-Stack Development, Responsive Website</p>
          <p className='duration'>Solo Project • April 2021</p>
        </div>
        <div className='details'>
          <p>
            Houseplants are a fairly new obsession of mine and sometimes I struggle to remember
            their various needs. My solution had been to keep a spreadsheet with information on each
            plant, such as the level of light, water, temperature, and humidity they each required.
          </p>
        </div>
        <div style={{ margin: '30px 0' }}>
          <Carousel images={projectImages} />
        </div>
        <div className='details'>
          <p>
            I decided to build
            <strong> plantgeek </strong>
            as an upgrade to my spreadsheet, where you can browse and view care information for
            hundreds of plants. Users can sign up to create lists of plants they own, love, or wish
            to have and even contribute to the database. Admins can approve or reject submissions as
            well as delete plants.
          </p>
          <p>
            I started this website as a full-stack solo school project in 2021 and I have since
            continued to improve and work on it in my spare time. For more information, check out my
            code on GitHub or view the live website below.
          </p>
          <div className='buttons'>
            <LinkButton
              className='black'
              href='https://www.plantgeek.co'
              target='_blank'
              rel='noopener noreferrer'>
              VIEW LIVE SITE
            </LinkButton>
            <LinkButton
              className='white'
              href='https://github.com/v-prt/plantgeek'
              target='_blank'
              rel='noopener noreferrer'>
              VIEW ON GITHUB
            </LinkButton>
            {/* <UnderlinedLink href='https://youtu.be/_LXWqhxIMrQ' target='_blank' rel='noopener noreferrer'>
            Video Demo
          </UnderlinedLink> */}
          </div>
        </div>
      </div>
    </ProjectWrapper>
  )
}
