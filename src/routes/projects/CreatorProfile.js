import { useEffect } from 'react'
import { ProjectWrapper, LinkButton } from '../../GlobalStyles'
import { ViewAllProjects } from '../../components/ViewAllProjects'
import { Carousel } from '../../components/Carousel'
import wave from '../../assets/white-wave.svg'

import image1 from '../../assets/creator/creator-profile1.png'
import image2 from '../../assets/creator/creator-profile2.png'
import image3 from '../../assets/creator/creator-profile3.png'
import image4 from '../../assets/creator/creator-profile4.png'
import image5 from '../../assets/creator/creator-profile5.png'
import image6 from '../../assets/creator/profile-editor1.png'
import image7 from '../../assets/creator/profile-editor2.png'
import image8 from '../../assets/creator/profile-editor3.png'
import image9 from '../../assets/creator/profile-editor4.png'
import image10 from '../../assets/creator/profile-editor5.png'
import image11 from '../../assets/creator/profile-editor6.png'
import image12 from '../../assets/creator/profile-editor7.png'
import image13 from '../../assets/creator/profile-editor8.png'

export const CreatorProfile = () => {
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
    image12,
    image13,
  ]

  return (
    <ProjectWrapper>
      <div className='banner' style={{ background: 'linear-gradient(to right, #FFCCD9, #BBDCF7)' }}>
        <img src={wave} alt='' />
      </div>
      <section className='description'>
        <h1 className='title'>
          [ <b>Creator Profile</b> ]
        </h1>
        <div className='summary'>
          <p className='type'>Full Stack Development, Responsive Website</p>
          <p className='duration'>Project Lead • July - August 2022</p>
        </div>
        <div className='details'>
          <p>
            One of the biggest projects I've undertaken at Creator and one I'm really proud of! As
            project lead, I was responsible for the UX/UI design and the majority of the development
            for the Creator Profile which serves as a digital media kit or resume and link in bio
            for social media influencers on the{' '}
            <a className='link' href='https://creator.co' target='_blank' rel='noopener noreferrer'>
              creator.co
            </a>{' '}
            platform.
          </p>
        </div>
        <div style={{ margin: '40px 0' }}>
          <Carousel images={projectImages} />
        </div>
        <div className='details'>
          <p>
            The goal for this project was to provide creators an easy way to curate their content
            portfolios and showcase their stats to get more brand collaborations. Features include
            uploading a profile image, bio and other personal information; automatically updated
            metrics for social accounts connected to our platform; automatically populated top
            performing content; and the option to add rates for social media services, upload
            recommended products to earn commission, and additional custom links.
          </p>
          <div className='buttons'>
            <LinkButton
              className='black'
              href='https://example.creator.co'
              target='_blank'
              rel='noopener noreferrer'>
              View Example Profile
            </LinkButton>
          </div>
        </div>
      </section>
      <ViewAllProjects />
    </ProjectWrapper>
  )
}
