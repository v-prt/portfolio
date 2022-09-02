import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { BREAKPOINTS } from '../GlobalStyles'
import creatorProfile from '../assets/project-thumbnail1.svg'
import eagleTek from '../assets/project-thumbnail2.svg'
import plantgeek from '../assets/project-thumbnail3.svg'
import sushiHeaven from '../assets/project-thumbnail4.svg'
import ticketWidget from '../assets/project-thumbnail5.svg'
import { ImageLoader } from '../components/ImageLoader'

export const Projects = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    {
      path: 'creator-profile',
      thumbnail: creatorProfile,
      title: 'Creator Profile',
      type: 'UX Design & Full-Stack Development',
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
      role: 'Solo Project • Apr 2021',
    },
    {
      path: 'eagletek',
      thumbnail: eagleTek,
      title: 'eagleTek',
      type: 'Full-Stack Development',
      device: 'Responsive Website',
      role: 'Group Project • Mar 2021',
    },
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
          <Link key={index} className='project-card fade-in' to={`/projects/${project.path}`}>
            <div className='thumbnail'>
              <ImageLoader src={project.thumbnail} alt='' />
            </div>
            <div className='text'>
              <h2 className='title'>{project.title}</h2>
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
  margin-top: 50px;
  padding: 20px;
  h1 {
    color: #333;
  }
  .project-grid {
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 10px auto;
    .project-card {
      background: #fff;
      border-radius: 20px;
      overflow: hidden;
      // prevent hover effect on touch screens
      @media (hover: hover) {
        &:hover {
          transform: translate(0, -10px);
          box-shadow: 3px 5px 30px 0px #453b501a;
        }
      }
      .thumbnail {
        background: #ddd;
        width: 100%;
        min-height: 200px;
        max-height: 200px;
        border-radius: 20px 20px 0 0;
        overflow: hidden;
        display: grid;
        place-content: center;
        img {
          max-width: 100%;
        }
      }
      .text {
        padding: 20px;
        color: #444;
        .title {
          margin-bottom: 20px;
        }
        .type {
          font-weight: bold;
        }
        .device {
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
    padding: 30px;
    .project-grid {
      gap: 30px;
      .project-card {
        display: flex;
        .thumbnail {
          border-radius: 20px 0 0 20px;
        }
        .thumbnail,
        .text {
          flex: 1;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      }
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.desktop}) {
    padding: 40px;
    .project-grid {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 40px;
      .project-card {
        flex-direction: column;
        flex: 1;
        min-width: 300px;
        .thumbnail {
          border-radius: 20px 20px 0 0;
          min-height: 250px;
        }
      }
    }
  }
`
