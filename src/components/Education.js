import styled from 'styled-components/macro'
import { COLORS, BREAKPOINTS } from '../GlobalStyles'
import freeCodeCampCert from '../assets/certs/fcc-responsive-web.png'
import testDomeCert from '../assets/certs/test-dome-js.png'
import mimoCert from '../assets/certs/mimo-web-dev.jpg'

export const Education = () => {
  return (
    <Wrapper>
      <div className='section-inner'>
        <h2 className='heading'>
          [ <b>education</b> ]
        </h2>
        <h3>Concordia University</h3>
        <div className='title'>Full-Stack Web Development Diploma</div>
        <div className='date'>Spring 2021</div>
        <div className='text'>
          <p>
            This intense 12-week coding bootcamp taught me the fundamentals of programming and gave
            me hands-on experience building complex modern web applications using the MERN stack.
          </p>
          <p>
            <b>Curriculum :</b> Programming Fundamentals (HTML, CSS, JavaScript, Git, GitHub),
            Server-side programming with Node (RESTful APIs, Express), Advanced Frontend (React,
            Redux), Full-Stack Group Project, Data Persistence (MongoDB), Full-Stack Solo Project
          </p>
        </div>
        <h3 style={{ marginTop: '60px' }}>Certifications</h3>
        <div className='text'>
          <p>
            On top of my professional diploma from Concordia University, I'm also proud to have
            earned these certificates by completing various online courses and tests.
          </p>
        </div>
        <div className='certificates'>
          <a
            className='cert'
            href='https://www.freecodecamp.org/certification/v-prt/responsive-web-design'
            target='_blank'
            rel='noopener noreferrer'>
            <img src={freeCodeCampCert} alt='freeCodeCamp Responsive Web Design Certificate' />
          </a>
          <a
            className='cert'
            href='https://victoriapeart.com/static/media/mimo-web-dev.0eede498.jpg'
            target='_blank'
            rel='noopener noreferrer'>
            <img src={mimoCert} alt='Mimo Web Dev Certificate' />
          </a>
          <a
            className='cert'
            href='https://app.testdome.com/cert/9f0776ba5d8a4eba98526521a3e8ab6a'
            target='_blank'
            rel='noopener noreferrer'>
            <img src={testDomeCert} alt='Test Dome Certificate' />
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #f6f6f6;
  .heading {
    color: ${COLORS.dark};
  }
  .certificates {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    .cert {
      img {
        max-height: 250px;
        max-width: 250px;
        transition: 0.2s ease-in-out;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.tablet}) {
    .certificates {
      gap: 30px;
    }
  }
`
