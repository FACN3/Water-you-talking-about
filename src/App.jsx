import { Switch, BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import Home from './Home';
import Calculator from './Calculator';
import Prices from './Prices';
import NavBar from './NavBar';
import './styles/reset';
import './styles/style';
import './styles/images';

const Container = styled.div``;

// our App

const App = () => (
  <BrowserRouter>
    <Container>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/prices" component={Prices} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
