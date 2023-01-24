import { useEffect } from 'react'
import { ProjectWrapper, LinkButton } from '../../GlobalStyles'
import { ViewAllProjects } from '../../components/ViewAllProjects'
import { Carousel } from '../../components/Carousel'
import wave from '../../assets/white-wave.svg'

import image1 from '../../assets/creator/creator-home.png'
import image2 from '../../assets/creator/creator-home-new.png'

export const Creatorco = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projectImages = [image1, image2]

  const captions = ['Before', 'After']

  return (
    <ProjectWrapper>
      <div className='banner' style={{ background: 'linear-gradient(to right, #DCECFB, #BBDCF7)' }}>
        <img src={wave} alt='' />
      </div>
      <section className='description'>
        <h1 className='title'>
          [ <b>Creator.co 2.0</b> ]
        </h1>
        <div className='summary'>
          <p className='type'>Frontend Development, Responsive Website</p>
          <p className='duration'>Sole Developer • January 2023</p>
        </div>
        <div className='details'>
          <p>
            Rebranding and redesign of the Creator.co website (homepage, landing pages, and key
            components such as the header and footer). We wanted to have a more modern and fresh
            aesthetic and user-friendly layout that would help brands and creators find the
            information they need about our platform more easily.
          </p>
        </div>
        <div style={{ margin: '40px 0' }}>
          <Carousel images={projectImages} captions={captions} />
        </div>
        <div className='details'>
          <p>
            This is one of my favorite types of projects in which I got to work deeply on the
            structure and design of the website, and push my limits as a frontend developer. I
            followed mockups provided by an external designer to completely rework the homepage and
            main landing pages.
          </p>
        </div>
        <div style={{ margin: '40px 0' }}>
          <iframe
            className='video'
            src='https://www.youtube.com/embed/1PwMpIBHC98'
            title='Creator.co 2.0 Demo'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen></iframe>
        </div>
        <div className='details'>
          <p>
            For this project, I had an especially tight deadline due to an upcoming conference but I
            worked quickly and efficiently to get it done in time - within 2 weeks from handoff! I
            focused on the structure and responsiveness first, then worked my way up to the more
            advanced but less important aspects of the update (such as animations). None of the
            animations were provided in the mockups and the implementation was left up to me,
            including the layered images that fade in and out and cards that slide into view as you
            scroll.
          </p>
          <p>
            Visit the website below to see the final product - and if you'd like to compare it to
            the previous version, you can watch this{' '}
            <a
              href='https://www.youtube.com/watch?v=wa7VMRikeBE'
              target='_blank'
              rel='noopener noreferrer'>
              old demo video
            </a>
            .
          </p>
          <div className='buttons'>
            <LinkButton
              className='black'
              href='https://creator.co'
              target='_blank'
              rel='noopener noreferrer'>
              View Website
            </LinkButton>
          </div>
        </div>
      </section>
      <ViewAllProjects />
    </ProjectWrapper>
  )
}
