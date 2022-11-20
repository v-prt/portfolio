import styled from 'styled-components/macro'
import { COLORS } from '../GlobalStyles'

export const Employment = () => {
  return (
    <Wrapper>
      <div className='section-inner experience'>
        <h2 className='heading'>
          [ <b>experience</b> ]
        </h2>
        <h3>Creator</h3>
        <p className='title'>Full-Stack Developer & Lead UX/UI Engineer</p>
        <p className='date'>June 2021 to present • Full-time</p>
        <div className='text'>
          <p>
            I'm currently working as a full-stack web developer at{' '}
            <a className='link' href='https://creator.co'>
              creator.co
            </a>
            , where we aim to be the top platform for social media influencers to connect and
            collaborate with brands.
          </p>
          <p>
            My responsibilities and accomplishments include maintaining our WordPress and React
            sites for brands and creators, making major feature or design updates, integrating new
            APIs, and bug resolution.
          </p>
          <p>
            On our platform, brands can build campaigns for social channels such as Instagram,
            YouTube, and TikTok, recruit influencers using an advanced search system (or leverage
            our team of Campaign Specialists), and view real-time analytics on their campaigns and
            influencer performance.
          </p>
          <p>
            Creators can connect their social accounts for multiple platforms, browse hundreds of
            collaboration opportunities, and filter campaigns based on their social stats or other
            personal information. Once opted in, they can view and manage their campaigns via their
            account dashboard and even chat with the brands.
          </p>
          <p>
            <b>Tech stack :</b> JavaScript, TypeScript, React, SCSS, Styled Components, Express,
            Node, MySQL, Prisma, WordPress, PHP
          </p>
        </div>
        <h3 style={{ marginTop: '60px' }}>Self-Employed</h3>
        <p className='title'>Freelance Web Developer</p>
        <p className='date'>Summer 2021 • Part-time</p>
        <div className='text'>
          <p>
            During the summer post-bootcamp, I did freelance work for a few different clients. My
            freelance projects included tasks such as building out pages according to provided
            mock-ups on Figma, linking data to frontend components, fixing responsiveness and
            alignment issues, adding file uploads, building HTML emails, and bug fixes.
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
`
