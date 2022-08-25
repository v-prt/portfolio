import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route path='/projects/creator-profile'>
          <CreatorProfile />
        </Route>
        <Route path={`/projects/ticket-widget`}>
          <TicketWidget />
        </Route>
        <Route path={`/projects/plantgeek`}>
          <Plantgeek />
        </Route>
        <Route path={`/projects/eagletek`}>
          <EagleTek />
        </Route>
        <Route path={`/projects/sushi-heaven`}>
          <SushiHeaven />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
