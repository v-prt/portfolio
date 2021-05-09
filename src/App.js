import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { Header } from "./components/Header";
import { Homepage } from "./routes/Homepage";
import { About } from "./routes/About";
import { Projects } from "./routes/Projects";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
