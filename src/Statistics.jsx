import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #383854;
  margin: 4rem 0 2rem 0;
  font-size: 2rem;
`;

const ImgContainer = styled.div`
  color: white;
  border: #383854 solid 0.5rem;
  border-radius: 1rem;
  margin: 0 1rem 0 1rem;
`;

const Img = styled.img`
  width: 100%;
`;

// const Info = styled.h2`
//   font-size: 1rem;
//   width: 100%;
//
//   @media only screen and (max-width: 700px) {
//     font-size: 0.5rem;
//   }
//
//   @media only screen and (max-width: 420px) {
//     width: 100%;
//   }
// `;

const Statistics = () => (
  <Container>
    <ImgContainer>
      <Img src="/Graph.png" />
    </ImgContainer>
  </Container>
);

export default Statistics;
