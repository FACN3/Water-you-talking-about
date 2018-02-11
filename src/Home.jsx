import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #383854;
  font-family: Righteous;
  margin: 1rem 0 0 0;
  font-size: 2rem;
`;

const Info = styled.h1`
  font-size: 2rem;
  max-width: 40rem;

  @media only screen and (max-width: 700px) {
    font-size: 1rem;
    width: 20rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0 0 1rem 0;
  @media only screen and (max-width: 700px) {
    font-size: 2rem;
    margin: 0 0 0.5rem 0;
  }
`;

const Home = () => (
  <Container>
    <Title>Welcome</Title>
    <Info>Please select your daily activity and choose the amout by clicking on it again</Info>
  </Container>
);

export default Home;
