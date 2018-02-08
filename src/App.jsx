import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
`;
const Title = styled.h1`
  display: flex;
  text-align: center;
  color: blue;
  font-size: 44px;
  font-weight: bold;

  @media only screen and (max-width: 700px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 22px;
  }
`;

const App = () => (
  <BrowserRouter>
    <Container>
      <NavBar />
      <Title>Water You Talking About?</Title>
    </Container>
  </BrowserRouter>
);

export default App;
