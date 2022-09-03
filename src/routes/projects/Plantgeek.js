import { useEffect } from 'react'
import { ProjectWrapper, LinkButton } from '../../GlobalStyles'
import { ViewAllProjects } from '../../components/ViewAllProjects'
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
      <section className='description'>
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
            their various needs! My solution had been to keep a spreadsheet with information on each
            plant, such as the level of light, water, temperature, and humidity they each required.
          </p>
        </div>
        <div style={{ margin: '40px 0' }}>
          <Carousel images={projectImages} />
        </div>
        <div className='details'>
          <p>
            I decided to build
            <strong> plantgeek </strong>
            as an upgrade to my spreadsheet, where you can browse and view care information for a
            large database of houseplants. Users can create an account, edit their profile, and
            curate lists of plants they own, love, or wish to have. They can also contribute to the
            database by submitting new plant images and information. Admins can approve or reject
            submissions, as well as delete plants. Approved submissions earn users cute stickers
            which are showcased on their profiles.
          </p>
          <p>
            I started this website as a full-stack solo school project in 2021 and I have
            periodically continued to improve on it in my spare time. While not technically open to
            the public, the website is live and usable to anyone who wishes to try it out - feel
            free to look through my code on GitHub as well!
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
          </div>
        </div>
      </section>
      <ViewAllProjects />
    </ProjectWrapper>
  )
}
