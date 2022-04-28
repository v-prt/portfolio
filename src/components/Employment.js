import styled from 'styled-components/macro'
import { COLORS } from '../GlobalStyles'

export const Employment = () => {
  return (
    <Wrapper>
      <Card>
        <Heading>
          [ <b>employment</b> ]
        </Heading>
        <Company>Creator</Company>
        <JobTitle>Web Developer - June 2021 to present</JobTitle>
        <Description>
          <p>
            I'm currently working as a Web Developer at <a href='https://creator.co'>Creator</a>,
            where we aim to be the top platform for social media influencers to connect and
            collaborate with brands.
          </p>
          <p>
            My responsibilities and accomplishments include maintaining our WordPress and React
            sites for brands and creators, making major design or feature updates, integrating new
            APIs, bug resolution, and more.
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
        </Description>
      </Card>
    </Wrapper>
  )
}

const Wrapper = styled.section``

const Card = styled.div`
  background: rgba(250, 250, 250, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px 40px 20px;
`

const Heading = styled.h2`
  margin-bottom: 30px;
  font-size: 2rem;
  color: ${COLORS.medium};
`

const Company = styled.h3`
  color: ${COLORS.accent};
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: -1px 1px #fff;
`

const JobTitle = styled.p`
  font-weight: bold;
  font-size: 0.8rem;
`

const Description = styled.div`
  max-width: 600px;
  p {
    margin: 20px 0;
    line-height: 1.75;
  }
  a {
    color: ${COLORS.medium};
    font-weight: bold;
    &:hover {
      color: ${COLORS.accent};
    }
  }
`
