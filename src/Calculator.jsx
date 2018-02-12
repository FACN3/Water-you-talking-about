import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #383854;
  margin: 2rem 0 2rem 0;
  font-size: 2rem;
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  background-color: #383854;
  color: #d1f4ff;
  border-radius: 1rem;
  margin: 2rem 0 1rem 0;
  padding: 0.5rem 8rem;
`;

const Calculator = () => (
  <Container>
    <SubTitle>
      Please select your daily activity and choose the amout by clicking on it again
    </SubTitle>
  </Container>
);

export default Calculator;
