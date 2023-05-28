import styled from 'styled-components/macro'
import { COLORS, BREAKPOINTS, LinkButton } from '../GlobalStyles'
import illustration from '../assets/illustrations/contact.svg'

export const Contact = () => {
  return (
    <Wrapper>
      <div className='section-inner'>
        <div className='text'>
          <h2>Wanna get in touch?</h2>
          <p>
            <a href='mailto:victoriapeart.dev@gmail.com' target='_blank' rel='noopener noreferrer'>
              Send an email
            </a>{' '}
            or connect with me on LinkedIn.
          </p>
          <div className='buttons'>
            <LinkButton
              className='white'
              href='https://docs.google.com/document/d/1gh5W-rwYeWiUx4dm8PYoAXDngMaPnnnf7QzrkZJDYC0/edit?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'>
              View Resume
            </LinkButton>
            <LinkButton
              className='black'
              href='https://linkedin.com/in/victoria-peart'
              target='_blank'
              rel='noopener noreferrer'>
              LinkedIn
            </LinkButton>
          </div>
        </div>
        {/* FIXME: find a better illustration */}
        <img src={illustration} alt='' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: ${COLORS.dark};
  color: #fff;
  width: 100%;
  .section-inner {
    max-width: 1160px;
    margin: auto;
    gap: 40px;
    img {
      height: 200px;
    }
    .text {
      display: flex;
      flex-direction: column;
      width: fit-content;
      margin-right: auto;
      h2 {
        font-weight: bold;
      }
      p {
        margin: 20px 0;
      }
      a {
        white-space: pre;
      }
    }
    .buttons {
      display: flex;
      gap: 20px;
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.tablet}) {
    .section-inner {
      .text p {
        margin: 30px 0;
      }
      img {
        margin-left: auto;
        height: 250px;
      }
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.desktop}) {
    .section-inner {
      flex-direction: row;
      img {
        height: 300px;
      }
    }
  }
`
