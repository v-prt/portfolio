import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { COLORS, BREAKPOINTS, fadeIn } from '../GlobalStyles'
import deaflink from '../assets/deaflink-thumbnail.svg'
import swetz from '../assets/swetz-thumbnail.svg'
import creatorProfile from '../assets/creator-profile-thumbnail.svg'
import ticketWidget from '../assets/ticket-widget-thumbnail.svg'
import plantgeek from '../assets/plantgeek-thumbnail.svg'
// import eagleTek from '../assets/eagletek-thumbnail.svg'
import sushiHeaven from '../assets/sushi-heaven-thumbnail.svg'
import { ImageLoader } from '../components/ImageLoader'

export const Projects = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // TODO: for each card, add functionality to tilt on mouseover
  // useEffect(() => {
  //   const cards = document.querySelectorAll('.project-card')

  //   const cardMouseMove = e => {
  //     const cardWidth = e.target.offsetWidth
  //     const cardHeight = e.target.offsetHeight
  //     const cardX = e.target.offsetLeft + cardWidth / 2
  //     const cardY = e.target.offsetTop + cardHeight / 2
  //     const mouseX = e.clientX - cardX
  //     const mouseY = e.clientY - cardY
  //     console.log(mouseX, mouseY)
  //   }

  //   cards.forEach(card => {
  //     card.addEventListener('mousemove', cardMouseMove)
  //   })
  // })

  const projects = [
    {
      path: 'deaflink',
      thumbnail: deaflink,
      title: 'deafLINK',
      type: 'UX Design',
      device: 'Mobile App & Responsive Website',
      role: 'Solo Project • Oct - Nov 2022',
    },
    {
      path: 'swetz',
      thumbnail: swetz,
      title: 'SWETZ',
      type: 'UX Design',
      device: 'Responsive Website',
      role: 'Solo Project • Aug - Sep 2022',
    },
    {
      path: 'creator-profile',
      thumbnail: creatorProfile,
      title: 'Creator Profile',
      type: 'Full-Stack Development',
      device: 'Responsive Website',
      role: 'Project Lead • Jul - Aug 2022',
    },
    {
      path: 'ticket-widget',
      thumbnail: ticketWidget,
      title: 'TicketWidget',
      type: 'UX Design',
      device: 'Mobile App',
      role: 'Solo Project • May - Aug 2022',
    },
    {
      path: 'plantgeek',
      thumbnail: plantgeek,
      title: 'plantgeek',
      type: 'Full-Stack Development',
      device: 'Responsive Website',
      role: 'Solo Project • Apr 2021 - current',
    },
    // {
    //   path: 'eagletek',
    //   thumbnail: eagleTek,
    //   title: 'eagleTek',
    //   type: 'Full-Stack Development',
    //   device: 'Responsive Website',
    //   role: 'Group Project • Mar 2021',
    // },
    {
      path: 'sushi-heaven',
      thumbnail: sushiHeaven,
      title: 'Sushi Heaven',
      type: 'Frontend',
      device: 'Javascript Game',
      role: 'Solo Project • Mar 2021',
    },
  ]

  return (
    <Wrapper>
      <div className='project-grid'>
        {projects.map((project, index) => (
          <Link to={`/projects/${project.path}`} className='project-card' key={index}>
            <div className='thumbnail'>
              <ImageLoader src={project.thumbnail} alt='' borderRadius='20px 20px 0 0' />
            </div>
            <div className='text'>
              <h2 className='title'>
                [ <b>{project.title}</b> ]
              </h2>
              <div>
                <p className='type'>{project.type}</p>
                <p className='device'>{project.device}</p>
              </div>
              <p className='role'>{project.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: #f2f2f2;
  flex: 1;
  display: flex;
  .project-grid {
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: auto;
    padding: 90px 20px 40px 20px;
    .project-card {
      animation: ${fadeIn} 1s ease-in-out;
      background: #fff;
      box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      /* transform-style: preserve-3d;
      transform: perspective(1000px); */
      // prevent hover effect on touch screens
      @media (hover: hover) {
        &:hover {
          transform: translate(0, -10px);
          box-shadow: 3px 5px 30px rgba(0, 0, 0, 0.2);
        }
      }
      .thumbnail {
        width: 100%;
        height: 200px;
        overflow: hidden;
      }
      .text {
        padding: 20px;
        color: #666;
        .title {
          color: ${COLORS.dark};
          margin-bottom: 20px;
        }
        .type {
          font-weight: bold;
        }
        .role {
          margin-top: 20px;
          font-size: 0.8rem;
          color: #999;
        }
      }
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.tablet}) {
    .project-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
      padding: 100px 30px 50px 30px;
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.desktop}) {
    .project-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 50px;
      padding: 110px 40px 60px 40px;
      .project-card .thumbnail {
        min-height: 250px;
      }
    }
  }
`
