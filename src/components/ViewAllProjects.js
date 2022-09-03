import styled from 'styled-components/macro'
import { COLORS, BREAKPOINTS, Button } from '../GlobalStyles'
import illustration from '../assets/illustrations/developer.svg'

export const ViewAllProjects = () => {
  return (
    <Wrapper>
      <div className='inner'>
        <img src={illustration} alt='' />
        <div className='text'>
          <p>Interested in seeing other things I've worked on?</p>
          <Button className='white' to='/projects'>
            SEE ALL PROJECTS
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: ${COLORS.dark};
  color: #fff;
  width: 100%;
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 60px 20px;
    img {
      height: 150px;
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: fit-content;
      p {
        text-align: center;
        margin: 10px 0;
      }
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.tablet}) {
    .inner {
      flex-direction: row;
      gap: 50px;
      padding: 70px 20px;
      .text {
        align-items: flex-start;
      }
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.desktop}) {
    .inner {
      gap: 60px;
      padding: 80px 20px;
      img {
        height: 250px;
      }
    }
  }
`
