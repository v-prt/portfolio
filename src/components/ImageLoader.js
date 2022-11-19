import React, { useState } from 'react'
import styled from 'styled-components/macro'

export const ImageLoader = ({ src, alt, borderRadius }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Wrapper style={{ borderRadius }}>
      {!imageLoaded && <div className='preloader' style={{ borderRadius }} />}
      <img
        src={src}
        alt={alt}
        className={`smooth-image image-${imageLoaded ? 'visible' : 'hidden'}`}
        onLoad={() => setImageLoaded(true)}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  place-content: center;
  overflow: hidden;
  height: 100%;
  width: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .smooth-image {
    transition: opacity 1s;
  }
  .image-visible {
    opacity: 1;
  }
  .image-hidden {
    opacity: 0;
  }
  .preloader {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background-image: linear-gradient(90deg, #f2f2f2 0px, #fafafa 100px, #f2f2f2 300px);
    background-size: 100vw 100%;
    animation: shine 1.5s infinite ease-in-out;
    position: absolute;
  }
  @keyframes shine {
    0% {
      background-position-x: -20vw;
    }
    100% {
      background-position-x: 85vw;
    }
  }
`
