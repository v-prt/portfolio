import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { COLORS, gradientAnimation } from '../GlobalStyles'
import { BiMenu } from 'react-icons/bi'
import { RiCloseLine } from 'react-icons/ri'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Wrapper>
      <div className='header-inner'>
        <div className='logo' onClick={() => setIsExpanded(false)}>
          <NavLink to='/'>VP</NavLink>
        </div>
        <nav className='main-nav'>
          <NavLink className='nav-link' to='/'>
            Home
          </NavLink>
          <NavLink className='nav-link' to='/projects'>
            Projects
          </NavLink>
          <NavLink className='nav-link' to='/about'>
            About
          </NavLink>
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
        </nav>
        <div className='burger' onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <RiCloseLine /> : <BiMenu />}
        </div>
        <nav className={`mobile-nav ${isExpanded && 'expanded'}`}>
          <div className='mobile-nav-inner'>
            <div className='nav-links' onClick={() => setIsExpanded(false)}>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
              <NavLink className='nav-link' to='/projects'>
                Projects
              </NavLink>
              <NavLink className='nav-link' to='/about'>
                About
              </NavLink>
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
        </nav>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background: #fff;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  .header-inner {
    max-width: 1400px;
    margin: auto;
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    background: ${COLORS.dark};
    padding: 5px;
    border-radius: 0 10px;
    transition: 0.2s ease-in-out;
    a {
      color: #fff;
      font-family: 'Train One', cursive;
      font-size: 1.5rem;
    }
    &:hover,
    &:focus {
      background: ${COLORS.primaryAccent};
    }
  }
  .main-nav {
    display: none;
    align-items: center;
    gap: 15px;
  }
  .nav-link {
    color: ${COLORS.dark};
    border-radius: 10px;
    border: 1px solid transparent;
    padding: 12px 10px 10px 10px;
    font-size: 0.7rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    &:hover,
    &:focus {
      color: ${COLORS.primaryAccent};
    }
    &.active {
      background: ${COLORS.dark};
      color: #fff;
      font-weight: bold;
    }
  }
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
  .burger {
    font-size: 1.4rem;
    display: grid;
  }

  .mobile-nav {
    background: #f6f6f6;
    height: calc(100vh - 45px);
    width: 100vw;
    position: absolute;
    top: 45px;
    right: -100%;
    transition: 0.2s ease-in-out;
    &.expanded {
      right: 0;
    }
    .mobile-nav-inner {
      display: flex;
      flex-direction: column;
      height: 100%;
      /* .site-info {
        text-align: center;
        font-size: 0.8rem;
        opacity: 0.75;
        margin-top: 40px;
        .title {
          background: linear-gradient(
              to right,
              ${COLORS.secondaryAccent},
              ${COLORS.primaryAccent},
              ${COLORS.secondaryAccent},
              ${COLORS.primaryAccent},
              ${COLORS.secondaryAccent},
              ${COLORS.primaryAccent},
              ${COLORS.secondaryAccent}
            )
            repeat;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 1000% 1000%;
          background-position: 105%;
          animation: ${gradientAnimation} linear 10s infinite;
          padding: 10px 0;
          font-weight: bold;
        }
      } */
      .nav-links {
        margin: 40px 20px;
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 40px;
      }
      .social-links {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin: auto auto 40px auto;
      }
    }
  }
  @media only screen and (min-width: 500px) {
    .main-nav {
      display: flex;
    }
    .burger,
    .mobile-nav {
      display: none;
    }
  }
`
