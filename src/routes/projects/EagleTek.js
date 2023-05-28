import { useEffect } from 'react'
import { ProjectWrapper, LinkButton } from '../../GlobalStyles'
import { ViewAllProjects } from '../../components/ViewAllProjects'
import { Carousel } from '../../components/Carousel'
import wave from '../../assets/white-wave.svg'

import image1 from '../../assets/eagletek/eagletek1.png'
import image2 from '../../assets/eagletek/eagletek2.png'
import image3 from '../../assets/eagletek/eagletek3.png'
import image4 from '../../assets/eagletek/eagletek4.png'
import image5 from '../../assets/eagletek/eagletek5.png'
import image6 from '../../assets/eagletek/eagletek6.png'
import image7 from '../../assets/eagletek/eagletek7.png'
import image8 from '../../assets/eagletek/eagletek8.png'
import image9 from '../../assets/eagletek/eagletek9.png'

export const EagleTek = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projectImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9]

  return (
    <ProjectWrapper>
      <div className='banner' style={{ background: 'linear-gradient(to right, #444, #111)' }}>
        <img src={wave} alt='' />
      </div>
      <section className='description'>
        <h1 className='title'>
          [ <b>eagleTek</b> ]
        </h1>
        <div className='summary'>
          <p className='type'>Full Stack Development, Responsive Website</p>
          <p className='duration'>Group Project • March 2021</p>
          <p className='collaborators'>
            Collaborators:{' '}
            <a
              className='link'
              href='https://www.linkedin.com/in/mariie-petit/'
              target='_blank'
              rel='noopener noreferrer'>
              Marie Petit
            </a>
            ,{' '}
            <a
              className='link'
              href='https://www.linkedin.com/in/andrew-fenrich/'
              target='_blank'
              rel='noopener noreferrer'>
              Andrew Fenrich
            </a>
          </p>
        </div>
        <div className='details'>
          <p>
            A group project completed in bootcamp by myself and 2 other students in span of one week
            where my teammates and I built a web application using React, Redux, Node, and Express
            for a fictional company we dubbed "eagleTek".
          </p>
        </div>
        <div style={{ margin: '40px 0' }}>
          <Carousel images={projectImages} />
        </div>
        <div className='details'>
          <p>
            Users can create an account, browse a large database of wearable tech such as smart
            watches and fitness trackers, and interact with their cart by adding or removing
            products and viewing their total purchase price. Products are sorted categorically as
            well as paginated and the stock updates automatically based on items in cart.
          </p>
          <p>
            As team lead for this project, it was an interesting challenge to divide our tasks based
            on our strengths while keeping the design cohesive! I helped us stay on track by
            organizing our project kanban board on GitHub and arranging our daily meetings.
          </p>
          <LinkButton
            className='black'
            href='https://www.youtube.com/watch?v=a9O7pC1S2KI'
            target='_blank'
            rel='noopener noreferrer'>
            View Demo
          </LinkButton>
        </div>
      </section>
      <ViewAllProjects />
    </ProjectWrapper>
  )
}
