import { useEffect } from 'react'
import { ProjectWrapper, LinkButton } from '../../GlobalStyles'
import { ViewAllProjects } from '../../components/ViewAllProjects'
import { Carousel } from '../../components/Carousel'
import wave from '../../assets/white-wave.svg'

import image1 from '../../assets/swetz/paper.png'
import image2 from '../../assets/swetz/tablet-home.png'
import image3 from '../../assets/swetz/digital-wireframe-home.png'
import image4 from '../../assets/swetz/desktop-home.png'
import image5 from '../../assets/swetz/mobile-home.png'
import image6 from '../../assets/swetz/desktop-shop.png'
import image7 from '../../assets/swetz/desktop-pdp.png'
import image8 from '../../assets/swetz/desktop-bag.png'
import image9 from '../../assets/swetz/desktop-checkout.png'
import image10 from '../../assets/swetz/desktop-confirmation.png'
import image11 from '../../assets/swetz/desktop-orders.png'

export const Swetz = () => {
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
      <div className='banner' style={{ background: 'linear-gradient(to right, #1A224D, #111)' }}>
        <img src={wave} alt='' />
      </div>
      <section className='description'>
        <h1 className='title'>
          [ <b>SWETZ</b> ]
        </h1>
        <div className='summary'>
          <p className='type'>UX Design, Responsive Website</p>
          <p className='duration'>Solo Project • August - September 2022</p>
        </div>
        <div className='details'>
          <p>
            My second UX Design project in which I designed a responsive website that allows users
            to efficiently order highly customized sweatshirts or hoodies.
          </p>
          <p>
            Users would be able to browse women's or men's sweatshirts and use filters to narrow
            down their results based on things like size, color, and features. They could also build
            their own sweatshirt or hoodie using the custom sweatshirt builder. Once they've found
            their perfect sweatshirt, they can add it to their cart, proceed through the checkout
            flow, and view their order history.
          </p>
        </div>
        <div style={{ margin: '40px 0' }}>
          <Carousel images={projectImages} />
        </div>
        <div className='details'>
          <p>
            I repeated the entire UX design process I learned in my previous project, including
            wireframing and prototyping. This time, however, I used <b>Adobe XD</b> rather than
            Figma in order to learn a new design tool! Personally, I prefer Figma as I find it more
            intuitive but I'm glad to have become familiar with Adobe XD as it is such a popular
            tool. It also has some useful features that are lacking in Figma, such as the ability to
            quickly and easily repeat a grid of elements.
          </p>
          <div className='buttons'>
            <LinkButton
              className='black'
              href='https://xd.adobe.com/view/8d79422d-5af6-42fe-8993-c14992959400-d82a/?fullscreen'
              target='_blank'
              rel='noopener noreferrer'>
              View Prototype
            </LinkButton>
            <LinkButton
              className='white'
              href='https://docs.google.com/presentation/d/1j8rIdYoZ5QeeImseiIHKhBn7jmcSr9oZsOjYagNYOLE/edit?usp=sharing'
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
