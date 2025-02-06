import { useEffect } from 'react'
import { ProjectWrapper, LinkButton } from '../../GlobalStyles'
import { ViewAllProjects } from '../../components/ViewAllProjects'
import { Carousel } from '../../components/Carousel'
import wave from '../../assets/white-wave.svg'

import image1 from '../../assets/budgie/login.png'
import image2 from '../../assets/budgie/accounts.png'
import image3 from '../../assets/budgie/transactions.png'
import image4 from '../../assets/budgie/budget.png'
import image5 from '../../assets/budgie/goals.png'
import image6 from '../../assets/budgie/insights-top.png'
import image7 from '../../assets/budgie/insights-bottom.png'

export const Budgie = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projectImages = [image1, image2, image3, image4, image5, image6, image7]

  return (
    <ProjectWrapper>
      <div className='banner' style={{ background: 'linear-gradient(to right, #DCE2F7, #5374DA)' }}>
        <img src={wave} alt='' />
      </div>
      <section className='description'>
        <h1 className='title'>
          [ <b>Budgie</b> ]
        </h1>
        <div className='summary'>
          <p className='type'>Full Stack Development, Web App</p>
          <p className='duration'>Collaborative Project • 2024</p>
        </div>
        <div className='details'>
          <p>
            Budgie is a personal finance tracking app I built to replace Mint after its
            discontinuation. I needed a custom tool to track my finances more effectively, and this
            project has been invaluable in helping me stay on top of my budget, expenses, and
            savings goals!
          </p>
          <p>
            The app allows users to add financial accounts (assets or debts), manually input
            transactions, categorize spending, set monthly budgets for different categories, and
            manage recurring income and expenses. It also supports tracking financial goals, like
            saving for a down payment, with a flexible system for distributing funds based on
            priority or timeline.
          </p>
        </div>
        <div style={{ margin: '40px 0' }}>
          <Carousel images={projectImages} />
        </div>
        <div className='details'>
          <p>
            I developed Budgie using TypeScript on the frontend with Vite and React, integrating
            React Query for data fetching and caching. The backend is built with Node.js, Express,
            and Prisma, with a PostgreSQL database for structured financial data storage. Styled
            Components and Ant Design provide a clean and user-friendly interface.
          </p>
          <p>
            My husband, Joseph, collaborated on some of the analytics features to improve Budgie's
            ability to offer meaningful financial insights based on historical spending patterns.
          </p>
        </div>
        <div className='details'>
          <p>
            For technical details, check out my{' '}
            <a href='https://github.com/v-prt/budgie' target='_blank' rel='noopener noreferrer'>
              repository
            </a>{' '}
            on GitHub, complete with a detailed README and a look at the codebase.
          </p>
          <p>
            Tech stack & Libraries: TypeScript, Vite, React, React Query, Node, Express, Prisma,
            PostgreSQL, Ant Design, Styled Components, NPM Workspaces
          </p>
          <div className='buttons'>
            <LinkButton
              className='white'
              href='https://github.com/v-prt/budgie'
              target='_blank'
              rel='noopener noreferrer'>
              View on GitHub
            </LinkButton>
          </div>
        </div>
      </section>
      <ViewAllProjects />
    </ProjectWrapper>
  )
}
