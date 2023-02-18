import { useEffect } from 'react'
import { ProjectWrapper, LinkButton } from '../../GlobalStyles'
import { ViewAllProjects } from '../../components/ViewAllProjects'
import { Carousel } from '../../components/Carousel'
import wave from '../../assets/white-wave.svg'

import image1 from '../../assets/plantgeek-app/plantgeek-app1.png'
import image2 from '../../assets/plantgeek-app/plantgeek-app2.png'
import image3 from '../../assets/plantgeek-app/plantgeek-app3.png'
import image4 from '../../assets/plantgeek-app/plantgeek-app4.png'
import image5 from '../../assets/plantgeek-app/plantgeek-app5.png'
import image6 from '../../assets/plantgeek-app/plantgeek-app6.png'

export const PlantgeekApp = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projectImages = [image1, image2, image3, image4, image5, image6]

  return (
    <ProjectWrapper>
      <div className='banner' style={{ background: 'linear-gradient(to right, #A4E17D, #95D190)' }}>
        <img src={wave} alt='' />
      </div>
      <section className='description'>
        <h1 className='title'>
          [ <b>plantgeek app</b> ]
        </h1>
        <div className='summary'>
          <p className='type'>Full-Stack Development, Mobile App</p>
          <p className='duration'>Solo Project • January - February 2023</p>
        </div>
        <div className='details'>
          <p>
            Introducing my latest project, a mobile app built using React Native that is perfect for
            plant lovers! With this app, users can easily browse and add plants to their collection
            or wishlist, track their care needs such as watering and fertilizing, and even upload
            new plants using their phones.
          </p>
        </div>
        <div style={{ margin: '40px 0' }}>
          <Carousel images={projectImages} />
        </div>
        <div className='details'>
          <p>
            I built this app as a companion to my{' '}
            <a href='https://www.plantgeek.co' target='_blank' rel='noopenner noreferrer'>
              plantgeek
            </a>{' '}
            website, which I created a while back. With my newly acquired React Native skills, I put
            my knowledge to use and developed an app with the same key user flows as the website.
            However, I also added some cool device-specific functionality to make the app even more
            interactive and fun.
          </p>
        </div>
        <div style={{ margin: '40px 0' }}>
          <iframe
            className='video'
            src='https://www.youtube.com/embed/8eRWThYmcSQ'
            title='Plantgeek App Demo'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen></iframe>
        </div>
        <div className='details'>
          <p>
            A seemingly small but important feature I included in this app is haptic feedback, which
            highly improves the experience for users (especially for key interactions). As a
            developer, I prioritized creating a smooth UX with a clean and intuitive interface,
            ensuring that users can easily navigate and manage their plant collection.
          </p>
          <p>
            Tech stack: React Native, React Query, Expo, JavaScript/TypeScript, Node, Express,
            MongoDB
          </p>
          <div className='buttons'>
            <LinkButton
              className='black'
              href='https://github.com/v-prt/plantgeek-app'
              target='_blank'
              rel='noopener noreferrer'>
              View on GitHub
            </LinkButton>
          </div>
        </div>
      </section>
      <ViewAllProjects />
    </ProjectWrapper>
  )
}
