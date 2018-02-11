import { Switch, BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Calculator from './Calculator';
import Prices from './Prices';
import Statistics from './Statistics';

// our App

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/prices" component={Prices} />
      <Route path="/statistics" component={Statistics} />
    </Switch>
  </BrowserRouter>
);

export default App;
