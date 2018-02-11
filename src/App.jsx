import { Switch, BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import NavBar from './NavBar';

// our App

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
