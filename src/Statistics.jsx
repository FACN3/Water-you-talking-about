import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  text-align: center;
  margin: 2rem;
  border: #383854 solid 0.2rem;
  border-radius: 0rem 0rem 1rem 1rem;
`;

const ImgContainer = styled.div`
  color: white;
`;

const Img = styled.img`
  width: 75%;

  @media only screen and (max-width: 700px) {
    width: 85%;
  }

  @media only screen and (max-width: 420px) {
    width: 100;
  }
`;

const InfoContainer = styled.div`
  color: white;
  padding: : 1rem 0rem 1rem 0rem;
`;

const Title = styled.h1`
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

const Statistics = () => (
  <Container>
    <InfoContainer>
      <Title>Price Charts</Title>
      <ImgContainer>
        <Img src="/Graph.png" />
      </ImgContainer>
    </InfoContainer>
  </Container>
);

export default Statistics;
