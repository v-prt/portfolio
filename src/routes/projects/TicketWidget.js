import { useEffect } from 'react'
import { ProjectWrapper, LinkButton } from '../../GlobalStyles'
import { Carousel } from '../../components/Carousel'
import wave from '../../assets/white-wave.svg'

import image1 from '../../assets/ticket-widget/ticket-widget1.png'
import image2 from '../../assets/ticket-widget/ticket-widget2.png'
import image3 from '../../assets/ticket-widget/ticket-widget3.png'
import image4 from '../../assets/ticket-widget/ticket-widget4.png'
import image5 from '../../assets/ticket-widget/ticket-widget5.png'
import image6 from '../../assets/ticket-widget/ticket-widget6.png'
import image7 from '../../assets/ticket-widget/ticket-widget7.png'
import image8 from '../../assets/ticket-widget/ticket-widget8.png'
import image9 from '../../assets/ticket-widget/sticker-sheet.png'

export const TicketWidget = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projectImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9]

  return (
    <ProjectWrapper>
      <div className='banner' style={{ background: 'linear-gradient(to right, #D9B3FF, #7E1AC1)' }}>
        <img src={wave} alt='' />
      </div>
      <div className='description'>
        <h2 className='title'>
          [ <b>TicketWidget</b> ]
        </h2>
        <div className='summary'>
          <p className='type'>UX Design, Mobile App</p>
          <p className='duration'>Solo Project • May - August 2022</p>
        </div>
        <div className='details'>
          <p>
            My first UX Design project completed as part of my Google UX Certification in which I
            designed a mobile app that allows users to search and purchase concert tickets
            internationally.
          </p>
          <p>
            Users would be able to browse concerts and filter by date, location, or genre - then
            choose tickets to add to cart and proceed through the checkout flow. Purchased tickets
            would then be found in the user's ticket wallet, where they could be scanned at the
            venue.
          </p>
        </div>
        <div style={{ margin: '40px 0' }}>
          <Carousel images={projectImages} />
        </div>
        <div className='details'>
          <p>
            Throughout the course of this project I learned all about empathizing with users,
            conducting user research, wireframing, prototyping, and testing. I also learned how to
            use Figma to create the designs and sticker sheets, which I really enjoyed! Each stage
            of testing revealed opportunities for improvement which came to life in the final
            iterations of my design.
          </p>
          <p>
            Becoming more familiar with UX processes and the product life-cycle has helped
            tremendously with other projects and I'm excited to learn even more!
          </p>
          <div className='buttons'>
            <LinkButton
              className='black'
              href='https://www.figma.com/proto/aXXruSP5WHIyzSXOSDMc7S/TicketWidget?scaling=scale-down&page-id=137%3A1361&node-id=137%3A1442&starting-point-node-id=137%3A1442'
              target='_blank'
              rel='noopener noreferrer'>
              View Prototype
            </LinkButton>
            <LinkButton
              className='white'
              href='https://docs.google.com/presentation/d/1VU-9AZ_CmoytlepkZCGBrDUe6OvLFeB40ww8Drj-rPE/edit?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'>
              View Case Study
            </LinkButton>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  )
}
