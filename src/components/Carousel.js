import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { COLORS, BREAKPOINTS } from '../GlobalStyles'
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io'

export const Carousel = ({ images, captions }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    let slides = document.getElementsByClassName('slide')
    let dots = document.getElementsByClassName('dot')
    for (let i = 0; i < images.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
      slides[i].style.display = 'none'
    }
    slides[slideIndex].style.display = 'flex'
    dots[slideIndex].className += ' active'

    // automatically change to next slide every 3 seconds (starting over at end)
    if (imagesLoaded) {
      const interval = setInterval(() => {
        setSlideIndex(slideIndex === images.length - 1 ? 0 : slideIndex + 1)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [images.length, imagesLoaded, slideIndex])

  // set images loaded to true when all images have been loaded
  useEffect(() => {
    let imagesLoaded = 0
    images.forEach(image => {
      let img = new Image()
      img.src = image
      img.onload = () => {
        imagesLoaded++
        if (imagesLoaded === images.length) {
          setImagesLoaded(true)
        }
      }
    })
  }, [images, setImagesLoaded])

  return (
    <Wrapper>
      <div className={`slideshow-container ${imagesLoaded ? 'visible' : 'hidden'}`}>
        {!imagesLoaded && <div className='preloader' />}
        {images.map((image, index) => (
          <div key={index} className='slide fade'>
            {captions && <p className='caption'>{captions[index]}</p>}
            <img src={image} alt='' />
          </div>
        ))}
      </div>

      <div className='dots'>
        {/* <button
          className='prev'
          onClick={() => setSlideIndex(slideIndex === 0 ? images.length - 1 : slideIndex - 1)}>
          <IoMdArrowDropleftCircle />
        </button> */}
        {images.map((image, index) => (
          <span className='dot' onClick={() => setSlideIndex(index)}></span>
        ))}
        {/* <button
          className='next'
          onClick={() => setSlideIndex(slideIndex === images.length - 1 ? 0 : slideIndex + 1)}>
          <IoMdArrowDroprightCircle />
        </button> */}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .slideshow-container {
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s;
    position: relative;
    &.visible {
      opacity: 1;
    }
    &.hidden {
      opacity: 0;
    }
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
  .slide {
    width: 100%;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 350px;
    img {
      max-height: 100%;
      max-width: 100%;
      border-radius: 10px;
      box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
    }
    @media only screen and (min-width: ${BREAKPOINTS.tablet}) {
      height: 450px;
    }
    @media only screen and (min-width: ${BREAKPOINTS.desktop}) {
      height: 650px;
    }
  }
  .caption {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 20px;
    text-align: center;
    font-weight: bold;
  }
  .dots {
    padding-top: 40px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  .prev,
  .next {
    background: transparent;
    color: #ccc;
    border-radius: 50%;
    font-size: 1.5rem;
    display: grid;
    place-content: center;
    margin: 0 5px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      color: #999;
    }
  }
  .dot {
    background: #ccc;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      background: #999;
    }
    &.active {
      background: ${COLORS.primaryAccent};
      width: 30px;
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .fade {
    animation: fade 0.5s ease-in-out;
  }
`
