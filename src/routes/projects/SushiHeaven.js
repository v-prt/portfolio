import { useEffect } from 'react'
import { ProjectWrapper, LinkButton } from '../../GlobalStyles'
import { Carousel } from '../../components/Carousel'

import image1 from '../../assets/sushi-heaven/sushi-heaven-home.png'
import image2 from '../../assets/sushi-heaven/sushi-heaven-game.png'
import image3 from '../../assets/sushi-heaven/cookie-heaven-game3.png'
import image4 from '../../assets/sushi-heaven/cookie-clicker.png'

export const SushiHeaven = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projectImages = [image1, image2, image3, image4]

  return (
    <ProjectWrapper>
      <div className='description'>
        <h2 className='title'>
          [ <b>Sushi Heaven</b> ]
        </h2>
        <div className='summary'>
          <p className='type'>Frontend, Javascript Game</p>
          <p className='duration'>Solo Project • March 2021</p>
        </div>
        <div className='details'>
          <p>
            A spin on the classic "Cookie Clicker" browser game which started as a school project
            and has evolved over time as I kept tinkering and improving the aesthetics and gameplay.
          </p>
        </div>
        <div style={{ margin: '30px 0' }}>
          <Carousel images={projectImages} />
        </div>
        <div className='details'>
          <p>
            The goal is to make as much sushi as you can, buy upgrades and restaurants, and work
            your way up to owning a franchise. The game also automatically saves your progress so
            you can come back to it later.
          </p>
          <LinkButton
            className='black'
            href='https://sushi-heaven.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'>
            Play Game
          </LinkButton>
        </div>
      </div>
    </ProjectWrapper>
  )
}
