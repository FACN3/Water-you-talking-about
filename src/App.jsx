import { Switch, BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import Calculator from './Calculator';
import Prices from './Prices';
import Statistics from './Statistics';

// Styling section

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #383854;
`;

// our App

const App = () => (
  <BrowserRouter>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/prices" component={Prices} />
        <Route path="/statistics" component={Statistics} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
