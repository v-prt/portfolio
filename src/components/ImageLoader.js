import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

export const ImageLoader = ({ src, alt, borderRadius }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => setImageLoaded(true)
  })

  return (
    <Wrapper>
      {!imageLoaded && <div className='preloader' style={{ borderRadius }} />}
      <img
        src={src}
        alt={alt}
        className={`smooth-image ${imageLoaded ? 'visible' : 'hidden'}`}
        style={{ borderRadius }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .smooth-image {
    transition: 1s ease-in-out;
  }
  .visible {
    opacity: 1;
  }
  .hidden {
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
