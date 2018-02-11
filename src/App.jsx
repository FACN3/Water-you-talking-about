import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

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
      <NavBar />
    </Container>
  </BrowserRouter>
);

export default App;
