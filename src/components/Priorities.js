import styled from 'styled-components/macro'
import { COLORS } from '../GlobalStyles'

import responsiveness from '../assets/illustrations/responsiveness.svg'
import accessibility from '../assets/illustrations/accessibility.svg'
import style from '../assets/illustrations/style.svg'

export const Priorities = () => {
  return (
    <Wrapper>
      <Heading>
        [ <b>priorities</b> ]
      </Heading>
      <p>
        There are so many ways to be a great developer. These are some of the things I focus on when
        I code.
      </p>
      <Div>
        <Priority>
          <img src={responsiveness} alt='responsiveness' />
          <h3>Responsiveness</h3>
          <p>
            You never know what kind of device your clients are using, so it's important to be sure
            your app works well across a myriad of screen sizes and browsers.
          </p>
        </Priority>
        <Priority>
          <img src={accessibility} alt='assessibility' />
          <h3>Accessibility</h3>
          <p>
            More people are using the internet now more than ever. They come in all shapes and
            sizes, and so should technology in order to meet their needs.
          </p>
        </Priority>
        <Priority>
          <img src={style} alt='style' />
          <h3>Style</h3>
          <p>
            They say you shouldn't judge a book by its cover, but let's be real - most people do.
            There's nothing wrong with using a bit of flair to set your app apart.
          </p>
        </Priority>
      </Div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: ${COLORS.medium};
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  p {
    margin: 20px;
    max-width: 600px;
  }
`

const Heading = styled.h2`
  margin: 70px 0 20px 0;
  font-size: 2rem;
  text-align: center;
`

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const Priority = styled.div`
  background: #fff;
  color: #1a1a1a;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  padding: 30px;
  border-radius: 15px;
  overflow: hidden;
  img {
    height: 100px;
    margin: 20px;
  }
  h3 {
    text-align: center;
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 600px) {
    img {
      height: 150px;
    }
  }
`
