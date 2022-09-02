import { useEffect } from 'react'
import { ProjectWrapper, LinkButton, ProjectGallery } from '../../GlobalStyles'
import { ImageLoader } from '../../components/ImageLoader'

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
      <div className='description'>
        <h2 className='title'>
          [ <b>eagleTek</b> ]
        </h2>
        <div className='summary'>
          <p className='type'>Full-Stack Development, Responsive Website</p>
          <p className='duration'>Group Project • March 2021</p>
        </div>
        <div className='details'>
          <p>
            A group project completed in bootcamp by myself and 2 other students in span of one
            week.
          </p>
          <p>
            As team lead for this project, it was an interesting challenge to divide our tasks based
            on our strengths and keep the design cohesive. My teammates and I created a web
            application which allows users to browse wearable tech and add to or remove products
            from their cart. Built from scratch using React, Redux, Node, and Express.
          </p>
          <LinkButton
            className='black'
            href='https://www.youtube.com/watch?v=a9O7pC1S2KI'
            target='_blank'
            rel='noopener noreferrer'>
            View Demo
          </LinkButton>
        </div>
      </div>
      <ProjectGallery>
        {projectImages.map((image, index) => (
          <ImageLoader key={index} src={image} alt='' />
        ))}
      </ProjectGallery>
    </ProjectWrapper>
  )
}
