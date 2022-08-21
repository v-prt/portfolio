import React, { useState } from 'react'
import styled from 'styled-components/macro'

export const ImageLoader = ({ src, alt, placeholder }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Wrapper>
      <img
        src={src}
        alt={alt}
        className={`smooth-image image-${imageLoaded ? 'visible' : 'hidden'}`}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && (
        <div className='smooth-preloader'>
          <span className='loader' />
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative; // allows window to keep scrolling when hovering on gallery
  display: grid;
  .smooth-image {
    transition: opacity 1s;
  }
  .image-visible {
    opacity: 1;
  }
  .image-hidden {
    opacity: 0;
  }
`
