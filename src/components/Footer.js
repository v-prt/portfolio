import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { COLORS, BREAKPOINTS } from '../GlobalStyles'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Wrapper>
      <div className='footer-inner'>
        <div className='basic-info'>
          <div className='logo-wrapper'>
            <NavLink className='logo' to='/'>
              VP
            </NavLink>
            <p className='name'>
              Victoria
              <br />
              Peart
            </p>
          </div>
          <p className='services'>
            Full Stack Development, UX/UI Design, Responsive Websites, & Cross-Platform Mobile Apps
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
            href='mailto:victoriapeart.dev@gmail.com'
            target='_blank'
            rel='noopener noreferrer'>
            <MdEmail />
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
    max-width: 1400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
    .basic-info {
      padding: 20px 0;
      border-bottom: 1px dotted #ccc;
      .logo-wrapper {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 20px;
        .logo {
          background: ${COLORS.dark};
          color: #fff;
          padding: 10px;
          font-size: 2.5rem;
          font-family: 'Train One', cursive;
          transition: 0.2s ease-in-out;
          border-radius: 0 20px;
          &:hover {
            background: ${COLORS.primaryAccent};
          }
        }
        .name {
          color: ${COLORS.dark};
          font-size: 1.2rem;
          font-weight: bold;
          line-height: 1.25;
          margin-top: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
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
      padding: 20px 0;
      display: flex;
      gap: 15px;
      .social-link {
        color: ${COLORS.dark};
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
`
