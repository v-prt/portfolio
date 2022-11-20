import styled from 'styled-components/macro'
import { COLORS, BREAKPOINTS, LinkButton } from '../GlobalStyles'
import freeCodeCampCert from '../assets/certs/fcc-responsive-web.png'
import testDomeCert from '../assets/certs/test-dome-js.png'
import mimoCert from '../assets/certs/mimo-web-dev.jpg'

export const Education = () => {
  return (
    <Wrapper>
      <div className='section-inner education'>
        <h2 className='heading'>
          [ <b>education</b> ]
        </h2>
        <h3>Concordia University</h3>
        <p className='title'>Full-Stack Web Development Diploma</p>
        <p className='date'>February to April 2021</p>
        <div className='text'>
          <p>
            I took an intense 3-month online coding bootcamp where I learned the fundamentals of
            programming and had hands-on experience building complex modern web applications using
            the MERN stack.
          </p>
          <p style={{ fontWeight: 'bold', marginBottom: '0' }}>Curriculum :</p>
          <ul>
            <li>+ Programming Fundamentals (HTML, CSS, JavaScript, Git, GitHub)</li>
            <li>+ Server-side programming with Node (RESTful APIs, Express)</li>
            <li>+ Advanced Frontend (React, Redux)</li>
            <li>+ Full-Stack Group Project</li>
            <li>+ Data Persistence (MongoDB)</li>
            <li>+ Full-Stack Solo Project</li>
          </ul>
        </div>
        <LinkButton
          className='black'
          href='https://drive.google.com/file/d/1p4rNMTmKVvvZMKtNy9LmM4H2Dodi2RvJ/view?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'>
          View Diploma
        </LinkButton>

        <h3 style={{ marginTop: '60px' }}>Coursera, Google</h3>
        <p className='title'>UX Design Professional Certificate</p>
        <p className='date'>May to November 2022</p>
        <div className='text'>
          <p>
            This specialization program - comprised of seven courses developed by Google - taught me
            the UX design process from beginning to end, and gave me practical experience in user
            research and designing in Figma and Adobe XD.
          </p>
          <p>
            As a developer, I wanted to gain a deeper understanding of the product development life
            cycle and to complement my technical knowledge with professional design skills. I now
            also have a greater appreciation for user-centered design and how to apply it to my
            work.
          </p>
          <p style={{ fontWeight: 'bold', marginBottom: '0' }}>Curriculum :</p>
          <ul>
            <li>+ Foundations of User Experience (UX) Design</li>
            <li>+ Start the UX Design Process: Empathize, Define, and Ideate</li>
            <li>+ Build Wireframes and Low-Fidelity Prototypes</li>
            <li>+ Conduct UX Research and Test Early Concepts</li>
            <li>+ Create High-Fidelity Designs and Prototypes in Figma</li>
            <li>+ Responsive Web Design in Adobe XD</li>
            <li>+ Design a User Experience for Social Good</li>
            <li>+ 3 full UX Design projects with case studies</li>
          </ul>
        </div>
        <LinkButton
          className='white'
          href='https://coursera.org/share/b081388250531d68def9910a0fc5e4ba'
          target='_blank'
          rel='noopener noreferrer'>
          View Certificate
        </LinkButton>

        <h4 style={{ marginTop: '60px' }}>Other Achievements</h4>
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
  button {
    margin-top: 20px;
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
