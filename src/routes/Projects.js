import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { COLORS, BREAKPOINTS, fadeIn } from '../GlobalStyles'
import budgie from '../assets/budgie-thumbnail.svg'
import bookish from '../assets/bookish-thumbnail.svg'
import plantgeekApp from '../assets/plantgeek-app-thumbnail.svg'
import creatorco from '../assets/creatorco-thumbnail.png'
import deaflink from '../assets/deaflink-thumbnail.svg'
import swetz from '../assets/swetz-thumbnail.svg'
import creatorProfile from '../assets/creator-profile-thumbnail.png'
import ticketWidget from '../assets/ticket-widget-thumbnail.svg'
import plantgeek from '../assets/plantgeek-thumbnail1.svg'
// import eagleTek from '../assets/eagletek-thumbnail.svg'
import sushiHeaven from '../assets/sushi-heaven-thumbnail.svg'
import { ImageLoader } from '../components/ImageLoader'

export const Projects = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const devProjects = [
    {
      path: 'budgie',
      thumbnail: budgie,
      title: 'Budgie',
      type: 'Full Stack Development',
      device: 'Web App',
      role: 'Collaborative Project • 2024',
    },
    {
      path: 'bookish',
      thumbnail: bookish,
      title: 'bookish',
      type: 'Full Stack Development',
      device: 'Mobile App',
      role: 'Solo Project • Apr - May 2023',
    },
    {
      path: 'plantgeek-app',
      thumbnail: plantgeekApp,
      title: 'plantgeek app',
      type: 'Full Stack Development',
      device: 'Mobile App',
      role: 'Solo Project • Jan - Feb 2023',
    },
    {
      path: 'creatorco',
      thumbnail: creatorco,
      title: 'Creator.co 2.0',
      type: 'Frontend Development',
      device: 'Responsive Website',
      role: 'Sole Developer • Jan 2023',
    },
    {
      path: 'creator-profile',
      thumbnail: creatorProfile,
      title: 'Creator Profile',
      type: 'Full Stack Development',
      device: 'Responsive Website',
      role: 'Project Lead • Jul - Aug 2022',
    },
    {
      path: 'plantgeek',
      thumbnail: plantgeek,
      title: 'plantgeek',
      type: 'Full Stack Development',
      device: 'Web App',
      role: 'Solo Project • 2021 - 2022',
    },
    // {
    //   path: 'eagletek',
    //   thumbnail: eagleTek,
    //   title: 'eagleTek',
    //   type: 'Full Stack Development',
    //   device: 'Responsive Website',
    //   role: 'Group Project • Mar 2021',
    // },
    {
      path: 'sushi-heaven',
      thumbnail: sushiHeaven,
      title: 'Sushi Heaven',
      type: 'Frontend Development',
      device: 'Javascript Game',
      role: 'Solo Project • Mar 2021',
    },
  ]

  const designProjects = [
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
      path: 'ticket-widget',
      thumbnail: ticketWidget,
      title: 'TicketWidget',
      type: 'UX Design',
      device: 'Mobile App',
      role: 'Solo Project • May - Aug 2022',
    },
  ]

  const ProjectCard = ({ project }) => {
    return (
      <Link to={`/projects/${project.path}`} className='project-card'>
        <div className='thumbnail'>
          <ImageLoader src={project.thumbnail} alt='' borderRadius='20px 20px 0 0' />
        </div>
        <div className='text'>
          <h3 className='title'>
            [ <b>{project.title}</b> ]
          </h3>
          <div>
            <p className='type'>{project.type}</p>
            <p className='device'>{project.device}</p>
          </div>
          <p className='role'>{project.role}</p>
        </div>
      </Link>
    )
  }

  return (
    <Wrapper>
      <div className='page-inner'>
        <div className='section-header'>
          <h2>Development Projects</h2>
          <div className='tags'>
            <span className='tag'>React</span>
            <span className='tag'>JavaScript</span>
            <span className='tag'>TypeScript</span>
            <span className='tag'>HTML</span>
            <span className='tag'>CSS</span>
            <span className='tag'>Node.js</span>
            <span className='tag'>Express.js</span>
            <span className='tag'>MongoDB</span>
          </div>
        </div>

        <div className='project-grid'>
          {devProjects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>

        <div className='section-header'>
          <h2>Design Projects</h2>
          <div className='tags'>
            <span className='tag'>UX / UI</span>
            <span className='tag'>Figma</span>
            <span className='tag'>Adobe XD</span>
            <span className='tag'>Wireframes</span>
            <span className='tag'>Prototypes</span>
            <span className='tag'>User Journeys</span>
          </div>
        </div>
        <div className='project-grid'>
          {designProjects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: #f2f2f2;
  flex: 1;
  min-height: 100vh;
  .page-inner {
    padding: 100px 20px 40px 20px;
    max-width: 1400px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  h2 {
    font-weight: bold;
    font-size: 1.4rem;
    color: ${COLORS.primaryAccent};
  }
  .section-header {
    margin-bottom: 40px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
    .tag {
      background: #ccc;
      border-radius: 20px;
      padding: 10px 20px 8px 20px;
      font-size: 0.7rem;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
  .project-grid {
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: auto;
    padding-bottom: 80px;
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
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.desktop}) {
    .section-header {
      /* display: flex;
      gap: 30px;
      margin: 20px 0; */
      /* h2 {
        font-size: 2rem;
      } */
    }
    .project-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 50px;
      .project-card .thumbnail {
        min-height: 250px;
      }
    }
  }
`
