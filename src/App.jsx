import { Switch, BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Calculator from './Calculator';
import Prices from './Prices';
import Statistics from './Statistics';
import NavBar from './NavBar';

// our App

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/prices" component={Prices} />
      <Route path="/statistics" component={Statistics} />
    </Switch>
  </BrowserRouter>
);

export default App;
