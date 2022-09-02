import styled from 'styled-components/macro'
import { COLORS, BREAKPOINTS } from '../GlobalStyles'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Wrapper>
      <div className='footer-inner'>
        <div className='basic-info'>
          <p className='name'>Victoria Peart</p>
          <p className='services'>
            Full-Stack Web Development, UX/UI, Responsive Websites, & Mobile App Design
          </p>
          <div className='subtext'>
            <p className='copyright'>&copy; 2021 - {year}</p>
            <p className='location'>British Columbia, Canada</p>
          </div>
        </div>
        <div className='social-links'>
          <a
            className='social-link'
            href='https://github.com/v-prt'
            target='_blank'
            rel='noopener noreferrer'>
            <FaGithub />
          </a>
          <a
            className='social-link'
            href='https://www.linkedin.com/in/victoria-peart'
            target='_blank'
            rel='noopener noreferrer'>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background: #eee;
  border-top: 1px solid #ddd;
  .footer-inner {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
    .basic-info {
      padding: 20px;
      border-bottom: 1px dotted #ccc;
      .name {
        font-size: 1.2rem;
        font-weight: bold;
      }
      .services {
        font-size: 0.8rem;
        color: #666;
      }
      .subtext {
        margin-top: 30px;
        font-size: 0.8rem;
        color: #999;
        display: flex;
        flex-direction: column;
      }
    }
    .social-links {
      padding: 20px;
      display: flex;
      gap: 15px;
      .social-link {
        color: #000;
        display: grid;
        padding: 5px;
        border-radius: 50%;
        font-size: 1.3rem;
        transition: 0.2s ease-in-out;
        &:hover,
        &:focus {
          color: ${COLORS.primaryAccent};
        }
      }
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.tablet}) {
    .footer-inner {
      flex-direction: row;
      padding: 30px;
      .basic-info {
        flex: 2;
        border-bottom: 0;
      }
      .social-links {
        flex: 1;
        flex-direction: column;
        align-items: flex-end;
      }
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.desktop}) {
    .footer-inner {
      padding: 40px;
    }
  }
`
