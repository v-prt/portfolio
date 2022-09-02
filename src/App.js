import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import { Header } from './components/Header'
import { Homepage } from './routes/Homepage'
import { About } from './routes/About'
import { Projects } from './routes/Projects'
import { CreatorProfile } from './routes/projects/CreatorProfile'
import { TicketWidget } from './routes/projects/TicketWidget'
import { Plantgeek } from './routes/projects/Plantgeek'
import { EagleTek } from './routes/projects/EagleTek'
import { SushiHeaven } from './routes/projects/SushiHeaven'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/creator-profile' element={<CreatorProfile />} />
        <Route path='/projects/ticket-widget' element={<TicketWidget />} />
        <Route path='/projects/plantgeek' element={<Plantgeek />} />
        <Route path='/projects/eagletek' element={<EagleTek />} />
        <Route path='/projects/sushi-heaven' element={<SushiHeaven />} />
      </Routes>
    </BrowserRouter>
  )
}
