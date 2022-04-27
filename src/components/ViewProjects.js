import React from 'react'
import styled from 'styled-components/macro'
import { COLORS, StyledLink } from '../GlobalStyles'
import developer from '../assets/illustrations/developer.svg'

export const ViewProjects = () => {
  return (
    <Wrapper>
      <img src={developer} alt='' />
      <div>
        <p>Interested in seeing other things I've worked on?</p>
        <StyledLink className='black' to='/projects'>
          SEE PROJECTS
        </StyledLink>
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
    align-items: center;
    width: fit-content;
    margin: 20px;
    p {
      text-align: center;
      margin: 10px 0;
    }
    @media only screen and (min-width: 500px) {
      align-items: flex-start;
    }
  }
`
