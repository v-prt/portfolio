import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { COLORS, BREAKPOINTS } from '../GlobalStyles'
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io'

export const Carousel = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    let slides = document.getElementsByClassName('slide')
    let dots = document.getElementsByClassName('dot')
    for (let i = 0; i < images.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
      slides[i].style.display = 'none'
    }
    slides[slideIndex].style.display = 'grid'
    dots[slideIndex].className += ' active'

    // automatically change to next slide every 3 seconds (starting over at end)
    const interval = setInterval(() => {
      setSlideIndex(slideIndex === images.length - 1 ? 0 : slideIndex + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length, slideIndex])

  return (
    <Wrapper>
      <div className='slideshow-container'>
        {images.map((image, index) => (
          <div key={index} className='slide fade'>
            <img src={image} alt='' />
          </div>
        ))}
      </div>

      <div className='dots'>
        <button
          className='prev'
          onClick={() => setSlideIndex(slideIndex === 0 ? images.length - 1 : slideIndex - 1)}>
          <IoMdArrowDropleftCircle />
        </button>
        {images.map((image, index) => (
          <span className='dot' onClick={() => setSlideIndex(index)}></span>
        ))}
        <button
          className='next'
          onClick={() => setSlideIndex(slideIndex === images.length - 1 ? 0 : slideIndex + 1)}>
          <IoMdArrowDroprightCircle />
        </button>
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
  }
  .slide {
    display: none;
    place-content: center;
    height: 350px;
    img {
      max-height: 350px;
      max-width: 90vw;
      border-radius: 10px;
      box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
    }
    @media only screen and (min-width: ${BREAKPOINTS.tablet}) {
      height: 450px;
      img {
        max-height: 450px;
      }
    }
    @media only screen and (min-width: ${BREAKPOINTS.desktop}) {
      height: 600px;
      img {
        max-height: 600px;
      }
    }
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
    border-radius: 50%;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      background: #999;
    }
    &.active {
      background: ${COLORS.primaryAccent};
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
