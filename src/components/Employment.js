import styled from 'styled-components'
import { COLORS } from '../GlobalStyles'

export const Employment = () => {
  return (
    <Wrapper>
      <Card>
        <Heading>
          [ <b>employment</b> ]
        </Heading>
        <Company>creator.co</Company>
        <JobTitle>Web Developer - June 2021 to present</JobTitle>
        <Description>
          <p>
            I'm currently working as a Web Developer at <a href='https://creator.co'>creator.co</a>,
            where we aim to be the #1 platform for social media influencers to connect and
            collaborate with brands. We run 2 websites as a whole - one for creators, and one for
            brands.
          </p>
          <p>
            Our key features are the{' '}
            <a
              href='https://creator.co/collaboration-hub'
              target='_blank'
              rel='noopenner noreferrer'>
              Collaboration Hub
            </a>{' '}
            and{' '}
            <a href='https://creator.co/marketplace' target='_blank' rel='noopenner noreferrer'>
              Marketplace+
            </a>
            , as well as Creator Search and Campaign Builder (only accessible to brands under a
            subscription plan).
          </p>
          <p>
            <b>Tech stack:</b> WordPress, PHP, SCSS, JavaScript, TypeScript, React, Express, Node,
            MySQL
          </p>
        </Description>
      </Card>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  color: ${COLORS.dark};
  margin: auto;
  width: fit-content;
  padding: 50px 0;
`

const Card = styled.div`
  background: rgba(250, 250, 250, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

const Heading = styled.h2`
  color: ${COLORS.medium};
  margin-bottom: 30px;
  font-size: 2rem;
`

const Company = styled.h3`
  font-size: 1.5rem;
`

const JobTitle = styled.p`
  font-style: italic;
`

const Description = styled.div`
  max-width: 600px;
  p {
    margin: 20px 0;
    line-height: 1.75;
  }
  a {
    color: ${COLORS.dark};
    font-weight: bold;
    &:hover {
      color: ${COLORS.medium};
    }
  }
`
