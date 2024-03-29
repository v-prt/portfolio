import styled from 'styled-components/macro'
import { COLORS } from '../GlobalStyles'
import { ImageLoader } from './ImageLoader'
import mockups from '../assets/creator/creator-mockups2.png'

export const Employment = () => {
  return (
    <Wrapper>
      <div className='section-inner experience'>
        <h2 className='heading'>
          [ <b>experience</b> ]
        </h2>
        <h3>Creator</h3>
        <p className='title'>Full Stack Developer & Lead UX/UI Engineer</p>
        <p className='date'>June 2021 to present • Full-time</p>
        <div className='text'>
          <p>
            I'm currently working at{' '}
            <a className='link' href='https://creator.co' target='_blank' rel='noopener noreferrer'>
              creator.co
            </a>
            , where we aim to be the top platform for social media influencers to connect and
            collaborate with brands.
          </p>
          <div className='mockups'>
            <ImageLoader src={mockups} alt='' borderRadius='10px' />
          </div>
          <p>
            My responsibilities and accomplishments include building and maintaining our React
            dashboards, implementing new features, UX/UI design updates, API integration, and bug
            resolution.
          </p>
          <p>
            On the{' '}
            <a className='link' href='https://creator.co' target='_blank' rel='noopener noreferrer'>
              creator.co
            </a>{' '}
            platform, brands can build campaigns for social channels such as Instagram, YouTube, and
            TikTok, recruit influencers using an advanced search system (or leverage our team of
            Campaign Specialists), and view real-time analytics on their campaigns and influencer
            performance.
          </p>
          <p>
            Creators can connect their social accounts, browse hundreds of collaboration
            opportunities, and filter campaigns based on their social stats or other personal
            information. Once opted in, they can view and manage their campaigns via their account
            dashboard and communicate with the brands through our messaging system.
          </p>
          <p>
            <b>Tech stack :</b> JavaScript, TypeScript, React, Styled Components, Express, Node,
            PostgreSQL, Prisma, AWS
          </p>
          <p>
            <b>Deprecated :</b> WordPress, PHP, SCSS, MySQL, DigitalOcean
          </p>
        </div>
        <h3 style={{ marginTop: '60px' }}>Self-Employed</h3>
        <p className='title'>Freelance Web Developer</p>
        <p className='date'>Summer 2021 • Part-time</p>
        <div className='text'>
          <p>
            During the summer after completing my Web Dev bootcamp, I did freelance work for a few
            different clients. My projects included tasks such as building out pages according to
            provided mock-ups on Figma, linking data to frontend components, fixing responsiveness
            and alignment issues, adding file uploads, building HTML emails, and bug fixes.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #fff;
  .heading {
    color: ${COLORS.dark};
  }
  .mockups {
    width: 100%;
    margin: 40px 0;
  }
`
