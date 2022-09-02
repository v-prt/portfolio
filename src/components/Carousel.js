import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components/macro'
import { COLORS, BREAKPOINTS } from '../GlobalStyles'

export const Carousel = ({ images }) => {
  const sliderRef = useRef()

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => <div key={i} className='dot' />,
  }

  return (
    <Wrapper>
      <Slider className='slider' ref={sliderRef} {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className='img-frame'>
            <img src={image} alt='' />
          </div>
        ))}
      </Slider>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 100%;
  .slick-track {
    display: flex;
    align-items: center;
  }
  .slick-dots {
    padding-top: 40px;
    display: flex;
    justify-content: center;
    gap: 10px;
    .slick-active {
      .dot {
        background: ${COLORS.primaryAccent};
        opacity: 1;
        transform: scale(1.4);
        &:hover {
          opacity: 1;
        }
      }
    }
    .dot {
      opacity: 0.3;
      background: #000;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
        transform: scale(1.4);
        opacity: 0.6;
      }
    }
  }
  .slider {
    .img-frame {
      display: grid !important;
      place-content: center;
      img {
        max-height: 350px;
        max-width: 90vw;
        border-radius: 10px;
        box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
        @media only screen and (min-width: ${BREAKPOINTS.tablet}) {
          max-height: 400px;
        }
        @media only screen and (min-width: ${BREAKPOINTS.desktop}) {
          max-height: 600px;
        }
      }
    }
  }
`
