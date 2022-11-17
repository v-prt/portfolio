import styled from 'styled-components/macro'
import { BREAKPOINTS } from '../GlobalStyles'

export const Skills = () => {
  return (
    <Wrapper>
      <div className='section-inner'>
        <h2 className='heading'>
          [ <b>skills</b> ]
        </h2>
        <h3>Full-Stack Development & UX/UI Design</h3>
        <div className='text'>
          <p>
            My strengths lie mostly in front-end and UX/UI related development where my artistic
            abilities and eye for design can come into play. I also have excellent organization and
            communicational skills which ensure my teammates can easily read and understand my code.
          </p>
        </div>
        <div className='skill-groups'>
          <div className='group'>
            <p className='title'>Frontend</p>
            <ul>
              <li>HTML5</li>
              <li>CSS3 / SCSS</li>
              <li>Styled Components</li>
              <li>JavaScript / TypeScript</li>
              <li>React</li>
              <li>React Query</li>
              <li>Redux</li>
              <li>PHP</li>
              <li>WordPress</li>
            </ul>
          </div>
          <div className='group'>
            <p className='title'>Backend</p>
            <ul>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Node</li>
              <li>RESTful APIs</li>
              <li>CRUD</li>
              <li>MySQL</li>
              <li>Prisma</li>
            </ul>
          </div>
          <div className='group'>
            <p className='title'>Tools</p>
            <ul>
              <li>VS Code</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Canva</li>
            </ul>
          </div>
          <div className='group'>
            <p className='title'>Languages</p>
            <ul>
              <li>English</li>
              <li>American Sign Language</li>
              <li>Hungarian</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #f2f2f2;
  .skill-groups {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    gap: 30px;
    .group {
      background: #fff;
      color: #1a1a1a;
      padding: 20px;
      border-radius: 15px;
      .title {
        margin-bottom: 10px;
        font-size: 1.5rem;
        font-weight: bold;
      }
      ul {
        li {
          margin: 10px 0;
        }
      }
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.tablet}) {
    .skill-groups {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: normal;
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.desktop}) {
    .skill-groups {
      width: 800px;
      gap: 40px;
    }
  }
`
