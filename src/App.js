import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomeHeader from './components/HomeHeader/HomeHeader';
import TeamsList from "./components/TeamsList/TeamsList";
import TeamDescription from "./components/TeamDescription/TeamDescription";
import NotFound from "./components/NotFound/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/teams/:id" children={<TeamDescription />}>
        </Route>
        <Route exact path="/teams">
          <HomeHeader />
          <TeamsList />
        </Route>
        <Route exact path="/">
          <Redirect to="/teams" />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}