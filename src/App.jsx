import { Switch, BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import Home from './Home';
import NavBar from './NavBar';
import './styles/reset';

// our App

const App = () => (
  <BrowserRouter>
    <Container>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
