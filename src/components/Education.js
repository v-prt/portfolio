import styled from 'styled-components/macro'
import { Certificates } from './Certificates'
import { COLORS } from '../GlobalStyles'

export const Education = () => {
  return (
    <Wrapper>
      <Card>
        <Heading>
          [ <b>education</b> ]
        </Heading>
        <School>Concordia University</School>
        <Degree>Full-Stack Web Development Diploma - 2021</Degree>
        <Description>
          <p>
            This intense 12-week coding bootcamp taught me the fundamentals of programming and gave
            me hands-on experience building complex modern web applications using the MERN stack.
          </p>
          <p>
            <b>Curriculum :</b> Programming Fundamentals (HTML, CSS, JavaScript, Git, GitHub),
            Server-side programming with Node (RESTful APIs, Express), Advanced Frontend (React,
            Redux), Full-Stack Group Project, Data Persistence (MongoDB), Full-Stack Solo Project
          </p>
        </Description>
        <Certificates />
      </Card>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* margin: auto;
  width: fit-content;
  padding: 50px 0; */
`

const Card = styled.div`
  background: rgba(250, 250, 250, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px 40px 20px;
`

const Heading = styled.h2`
  color: ${COLORS.medium};
  margin-bottom: 30px;
  font-size: 2rem;
`

const School = styled.h3`
  color: ${COLORS.accent};
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: -1px 1px #fff;
`

const Degree = styled.p`
  font-weight: bold;
  font-size: 0.8rem;
`

const Description = styled.div`
  max-width: 600px;
  p {
    margin: 20px 0;
    line-height: 1.75;
  }
`
