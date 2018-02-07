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
  color: blue;
  font-size: 44px;
  font-weight: bold;
`;

const App = () => (
  <Container>
    <NavBar />
    <Title>Water You Talking About?</Title>
  </Container>
);

export default App;
