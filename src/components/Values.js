import styled from 'styled-components/macro'
import { COLORS, BREAKPOINTS } from '../GlobalStyles'

import responsiveness from '../assets/illustrations/responsiveness.svg'
import accessibility from '../assets/illustrations/accessibility.svg'
import style from '../assets/illustrations/style.svg'

export const Values = () => {
  return (
    <Wrapper>
      <div className='section-inner'>
        <h2 className='heading'>
          [ <b>values</b> ]
        </h2>
        <h3>Responsiveness, Accessibility, & Style</h3>
        <div className='text'>
          <p>
            There are so many ways to be a great developer! These are some of the most important
            things I focus on when I code.
          </p>
        </div>
        <div className='values'>
          <div className='value'>
            <img src={responsiveness} alt='responsiveness' />
            <h3>Responsiveness</h3>
            <p>
              You never know what kind of device your clients are using, so it's important to be
              sure your website or app is optimized for a myriad of screen sizes and browsers.
            </p>
          </div>
          <div className='value'>
            <img src={accessibility} alt='assessibility' />
            <h3>Accessibility</h3>
            <p>
              People come in all shapes and sizes. In order to provide the best experience for
              everyone, technology should strive to meet the needs of its users.
            </p>
          </div>
          <div className='value'>
            <img src={style} alt='style' />
            <h3>Style</h3>
            <p>
              They say you shouldn't judge a book by its cover, but let's be real - most people do.
              There's nothing wrong with using a bit of flair to set your app apart.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #222;
  color: #f6f6f6;
  .values {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    .value {
      background: #fff;
      color: ${COLORS.dark};
      max-width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 20px;
      border-radius: 15px;
      overflow: hidden;
      img {
        height: 100px;
        margin: 20px;
      }
      h3 {
        color: ${COLORS.medium};
        text-align: center;
        font-size: 1.5rem;
        margin: 20px 0;
      }
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.tablet}) {
    .values {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 30px;
      .value {
        img {
          height: 150px;
        }
      }
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.desktop}) {
    .values {
      gap: 40px;
      .value {
        padding: 50px 30px;
      }
    }
  }
`
