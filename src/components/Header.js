import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { COLORS } from '../GlobalStyles'
import { BiMenu } from 'react-icons/bi'
import { RiCloseLine } from 'react-icons/ri'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Wrapper>
      <div className='header-inner'>
        <div className='logo'>
          <NavLink to='/'>VP</NavLink>
        </div>
        <nav className='main-nav'>
          <NavLink className='nav-link' to='/'>
            HOME
          </NavLink>
          <NavLink className='nav-link' to='/projects'>
            PROJECTS
          </NavLink>
          <NavLink className='nav-link' to='/about'>
            ABOUT
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
            <div className='site-info'>
              <p className='title'>Victoria Peart • Portfolio</p>
              <p>Web Development and UX/UI Design</p>
            </div>
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
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    a {
      color: #000;
      font-family: 'Gallaudet-Regular', sans-serif;
      font-weight: 100;
      font-size: 2.5rem;
      &:hover,
      &:focus {
        color: ${COLORS.primaryAccent};
      }
    }
  }
  .main-nav {
    display: none;
    align-items: center;
    gap: 15px;
  }
  .nav-link {
    color: #000;
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
      background: #000;
      color: #fff;
      font-weight: bold;
    }
  }
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
  .burger {
    font-size: 1.4rem;
    display: grid;
  }
  .mobile-nav {
    background: linear-gradient(to bottom right, #d9c6ff, #ffd3b5);
    height: calc(100vh - 50px);
    width: 100vw;
    position: absolute;
    top: 50px;
    right: -100%;
    transition: 0.2s ease-in-out;
    &.expanded {
      right: 0;
    }
    .mobile-nav-inner {
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      .site-info {
        text-align: center;
        font-size: 0.8rem;
        opacity: 0.75;
        .title {
          font-weight: bold;
        }
      }
      .nav-links {
        margin: 40px 0;
        padding: 40px 0;
        border-top: 1px dotted rgba(0, 0, 0, 0.4);
        border-bottom: 1px dotted rgba(0, 0, 0, 0.4);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }
      .social-links {
        display: flex;
        gap: 15px;
        opacity: 0.75;
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
