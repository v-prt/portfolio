import { useEffect } from 'react'
import { ProjectWrapper, LinkButton } from '../../GlobalStyles'
import { ViewAllProjects } from '../../components/ViewAllProjects'
import { Carousel } from '../../components/Carousel'
import wave from '../../assets/white-wave.svg'

import image1 from '../../assets/deaflink/deaflink1.png'
import image2 from '../../assets/deaflink/deaflink2.png'
import image3 from '../../assets/deaflink/deaflink3.png'
import image4 from '../../assets/deaflink/deaflink4.png'
import image5 from '../../assets/deaflink/deaflink5.png'
import image6 from '../../assets/deaflink/deaflink6.png'
import image7 from '../../assets/deaflink/deaflink7.png'
import image8 from '../../assets/deaflink/deaflink8.png'
import image9 from '../../assets/deaflink/deaflink9.png'
import mockups from '../../assets/deaflink/deaflink-mockups.jpg'
import { ImageLoader } from '../../components/ImageLoader'

export const DeafLink = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projectImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9]

  return (
    <ProjectWrapper>
      <div className='banner' style={{ background: 'linear-gradient(to right, #ACBEFF, #223FA8)' }}>
        <img src={wave} alt='' />
      </div>
      <section className='description'>
        <h1 className='title'>
          [ <b>deafLINK</b> ]
        </h1>
        <div className='summary'>
          <p className='type'>UX Design, Mobile App & Responsive Website</p>
          <p className='duration'>Solo Project • October - November 2022</p>
        </div>
        <div className='details'>
          <p>
            My final project completed for my Google UX Design Certification in which I designed a
            user experience for social good. I chose to solve a problem faced by the{' '}
            <b>deaf community</b> - being disconnected from each other and lacking access to
            resources that could enrich their lives.
          </p>
          <div className='mockups'>
            <ImageLoader src={mockups} alt='' borderRadius='10px' />
          </div>
          <p>
            My solution to this real world issue was a social media mobile app focused on helping
            deaf or hard-of-hearing people around the world meet and connect through events. I also
            created a complementary responsive website to provide deaf, hard-of-hearing and hearing
            people a central place for finding resources or services such as sign language
            interpreters, ASL guides, deaf-friendly businesses, and more.
          </p>
          <p>
            In order to inform my designs, I conducted user research and did a competitive audit on
            other social media apps and websites for the deaf to discover gaps and opportunities for
            improvement. Once I had a clear idea of my user's needs, I started my designs by
            ideating on paper and then proceeded to create digital wireframes and prototypes for
            testing.
          </p>
          <p>
            Due to time constraints, I wasn't able to flesh out the responsive website designs as
            much as I would have liked, so I focused on establishing a clear information
            architecture and site hierarchy which would help propel the rest of the design process
            for the website.
          </p>
          <div style={{ margin: '40px 0' }}>
            <Carousel images={projectImages} />
          </div>
          <p>
            Ultimately, this project taught me how to consider the use case of the product I'm
            designing - whether it's a mobile app or website and to optimize page layouts and
            navigation to meet different device specifications while keeping the user's needs front
            of mind.
          </p>
          <div className='buttons'>
            <LinkButton
              className='black'
              href='https://www.figma.com/proto/FHRn3Evf2hBuzznIUb6p1l/deafLINK?node-id=32%3A4&scaling=min-zoom&page-id=32%3A2&starting-point-node-id=32%3A4'
              target='_blank'
              rel='noopener noreferrer'>
              View Prototype
            </LinkButton>
            <LinkButton
              className='white'
              href='https://docs.google.com/presentation/d/1ysG7P9TzUwYRyJ-Sni_pDs-ex6HKzDo6VMmUKmbWyY8/edit?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'>
              View Case Study
            </LinkButton>
          </div>
        </div>
      </section>
      <ViewAllProjects />
    </ProjectWrapper>
  )
}
