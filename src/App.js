import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Homepage } from './routes/Homepage'
import { About } from './routes/About'
import { Projects } from './routes/Projects'
import { Budgie } from './routes/projects/Budgie'
import { Bookish } from './routes/projects/Bookish'
import { PlantgeekApp } from './routes/projects/PlantgeekApp'
import { Creatorco } from './routes/projects/Creatorco'
import { DeafLink } from './routes/projects/DeafLink'
import { Swetz } from './routes/projects/Swetz'
// import { CreatorProfile } from './routes/projects/CreatorProfile'
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
        <Route path='/projects/budgie' element={<Budgie />} />
        <Route path='/projects/bookish' element={<Bookish />} />
        <Route path='/projects/deaflink' element={<DeafLink />} />
        <Route path='/projects/plantgeek-app' element={<PlantgeekApp />} />
        <Route path='/projects/creatorco' element={<Creatorco />} />
        <Route path='/projects/swetz' element={<Swetz />} />
        {/* <Route path='/projects/creator-profile' element={<CreatorProfile />} /> */}
        <Route path='/projects/ticket-widget' element={<TicketWidget />} />
        <Route path='/projects/plantgeek' element={<Plantgeek />} />
        <Route path='/projects/eagletek' element={<EagleTek />} />
        <Route path='/projects/sushi-heaven' element={<SushiHeaven />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
