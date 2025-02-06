import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProjectWrapper, LinkButton } from '../../GlobalStyles'
import { ViewAllProjects } from '../../components/ViewAllProjects'
import { Carousel } from '../../components/Carousel'
import { ImageLoader } from '../../components/ImageLoader'
import wave from '../../assets/white-wave.svg'

import image1 from '../../assets/plantgeek/plantgeek1.png'
import image2 from '../../assets/plantgeek/plantgeek2.png'
import image3 from '../../assets/plantgeek/plantgeek3.png'
import image4 from '../../assets/plantgeek/plantgeek4.png'
import image5 from '../../assets/plantgeek/plantgeek5.png'
import image6 from '../../assets/plantgeek/plantgeek6.png'
import image7 from '../../assets/plantgeek/plantgeek7.png'
import image8 from '../../assets/plantgeek/plantgeek8.png'
import image9 from '../../assets/plantgeek/plantgeek9.png'
import image10 from '../../assets/plantgeek/plantgeek10.png'
import mockups from '../../assets/plantgeek/plantgeek-mockups.png'

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
  ]

  return (
    <ProjectWrapper>
      <div className='banner' style={{ background: 'linear-gradient(to right, #A4E17D, #95D190)' }}>
        <img src={wave} alt='' />
      </div>
      <section className='description'>
        <h1 className='title'>
          [ <b>plantgeek</b> ]
        </h1>
        <div className='summary'>
          <p className='type'>Full Stack Development, Web App</p>
          <p className='duration'>Solo Project • 2021 - 2022</p>
        </div>
        <div className='details'>
          <p>
            Houseplants are a fairly new obsession of mine and sometimes I struggle to remember
            their various needs! My solution had been to keep a spreadsheet with information on each
            plant, such as the level of light, water, temperature, and humidity they each required.
          </p>
          <div className='mockups'>
            <ImageLoader src={mockups} alt='' borderRadius='10px' />
          </div>
          <p>
            I decided to design and build
            <strong> plantgeek </strong>
            as an upgrade to my spreadsheet, where you can browse and view care information for a
            large database of houseplants. Users can create an account, edit their profile, and
            curate lists of plants they own or wish to have. They can also contribute to the
            platform by submitting new plant images and information. Admins can approve or reject
            submissions, as well as edit and delete plants. Approved submissions earn users cute
            stickers which are showcased on their profiles!
          </p>
          <div style={{ margin: '40px 0' }}>
            <Carousel images={projectImages} />
          </div>
          <p>
            I started this website as a full stack solo project in 2021 and continued to maintain
            and improve on it in my spare time through 2022. Watch the demo video (link below) or
            look through my code on GitHub! The platform is fully responsive and usable on desktop,
            tablet, and mobile. I also created a{' '}
            <Link to='/projects/plantgeek-app'>mobile app version</Link> on React Native.
          </p>
          <p>
            Tech stack: React.js, React Query, Ant Design, Styled Components, Node, Express,
            MongoDB, Typescript
          </p>
          <div className='buttons'>
            {/* <LinkButton
              className='black'
              href='https://www.plantgeek.co'
              target='_blank'
              rel='noopener noreferrer'>
              VIEW LIVE SITE
            </LinkButton> */}
            <LinkButton
              className='black'
              href='https://youtu.be/JTIm2Gd30EI'
              target='_blank'
              rel='noopener noreferrer'>
              VIEW DEMO
            </LinkButton>
            <LinkButton
              className='white'
              href='https://github.com/v-prt/plantgeek'
              target='_blank'
              rel='noopener noreferrer'>
              VIEW ON GITHUB
            </LinkButton>
          </div>
        </div>
      </section>
      <ViewAllProjects />
    </ProjectWrapper>
  )
}
