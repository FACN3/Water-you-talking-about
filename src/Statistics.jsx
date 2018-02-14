import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0 0 0;
`;

const Info = styled.h2`
  width: 75%;
  font-size: 1rem;
  text-align: center;
  margin: 0 0 1rem 0;
  width: 100%;
  color: #383854;

  @media only screen and (max-width: 700px) {
    font-size: 0.75rem;
  }

  @media only screen and (max-width: 420px) {
    font-size: 0.5rem;
    width: 75%;
  }
`;

const StatsContainer = styled.div`
  text-align: center;
  margin: 0 1rem;
  border: #383854 solid 0.2rem;
  border-radius: 0rem 0rem 1rem 1rem;

  @media only screen and (max-width: 420px) {
    margin: 0;
  }
`;

const Title = styled.h2`
  font-size: 1rem;
  width: 100%;
  background-color: #383854;
  color: white;
  margin: 0 0 1rem 0;

  @media only screen and (max-width: 700px) {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 420px) {
    font-size: 0.8rem;
  }
`;

const Img = styled.img`
  width: 60%;

  @media only screen and (max-width: 700px) {
    width: 85%;
  }

  @media only screen and (max-width: 420px) {
    width: 100%;
  }
`;

const ImgContainer = styled.div``;

const Statistics = () => (
  <Container>
    <Info>In the graph below, you will see the water price changes over the years</Info>
    <StatsContainer>
      <Title>Price Charts</Title>
      <ImgContainer>
        <Img src="/Graph.png" />
      </ImgContainer>
    </StatsContainer>
  </Container>
);

export default Statistics;
