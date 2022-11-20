import { useEffect } from 'react'
import { ProjectWrapper, LinkButton } from '../../GlobalStyles'
import { ViewAllProjects } from '../../components/ViewAllProjects'
import { ImageLoader } from '../../components/ImageLoader'
import wave from '../../assets/white-wave.svg'
import mockups from '../../assets/sushi-heaven/sushi-heaven-mockups.png'

export const SushiHeaven = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ProjectWrapper>
      <div className='banner' style={{ background: 'linear-gradient(to right, #FFECB3, #FFB3D2)' }}>
        <img src={wave} alt='' />
      </div>
      <section className='description'>
        <h1 className='title'>
          [ <b>Sushi Heaven</b> ]
        </h1>
        <div className='summary'>
          <p className='type'>Frontend, Javascript Game</p>
          <p className='duration'>Solo Project • March 2021</p>
        </div>
        <div className='details'>
          <p>
            A spin on the classic "Cookie Clicker" browser game which started as a small school
            project and evolved over time as I continued to tinker with the aesthetics and gameplay
            logic. It was a fun way to practice my Javascript skills and learn more about game
            design, which is something I've always been interested in.
          </p>
          <div className='mockups'>
            <ImageLoader src={mockups} alt='' borderRadius='10px' />
          </div>
          <p>
            The goal of the game is to make as much sushi as you can, buy upgrades and restaurants,
            and work your way up to owning a franchise. Try it out and have fun - your progress is
            automatically saved so you can always come back to it later!
          </p>
          <LinkButton
            className='black'
            href='https://sushi-heaven.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'>
            Play Game
          </LinkButton>
        </div>
      </section>
      <ViewAllProjects />
    </ProjectWrapper>
  )
}
