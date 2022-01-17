import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from '../GlobalStyles'
import developer from '../assets/illustrations/developer.svg'

export const ViewProjects = () => {
  return (
    <Wrapper>
      <img src={developer} alt='' />
      <div>
        <p>Interested in seeing other things I've worked on?</p>
        <ProjectsLink to='/projects'>View my projects</ProjectsLink>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: ${COLORS.dark};
  color: #fff;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  img {
    height: 150px;
    margin: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 20px;
    p {
      text-align: center;
      margin-bottom: 20px;
    }
  }
`

const ProjectsLink = styled(Link)`
  background: ${COLORS.light};
  color: #fff;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  padding: 10px 20px;
  &:hover,
  &:focus {
    background: ${COLORS.accent};
    color: #fff;
  }
`
