import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: #383854;
  margin: 2rem 0 2rem 0;
  font-size: 2rem;
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  color: #383854;
`;

const ResultsTitle = styled.h2`
  font-size: 1.5rem;
  color: white;
`;

const Activitys = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  color: #383854;
  max-width: 50%;
  border-radius: 1rem;
`;

const IconContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 1rem 0 0 0;
`;

const Icon = styled.section`
  border-radius: 1rem;
  color: white;
  background-color: #383854;
  border: 0.05rem rgba(255, 255, 255, 0.75) solid;
  box-shadow: 0.2rem 0.2rem 0.3rem #888888;
  margin: 0 0.5rem;
  padding: 1rem 2rem 5rem 2rem;
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
`;

const Calculate = styled.button`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: #383854;
  max-width: 50%;
  background-color: rgba(0, 0, 0, 0.25);
  border: 0.05rem rgba(0, 0, 0, 0.5) solid;
  padding: 0.5rem 10rem;
  border-radius: 1rem;
  margin: 2rem 0;
  box-shadow: 0.2rem 0.2rem 0.3rem #888888;
`;

const ResultsContainer = styled.section`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`;

const Results = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #383854;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  margin: 0 1rem;
`;

const Numbers = styled.section`
  background-color: rgba(255, 255, 255, 0.5);
  border: white 0.05rem solid;
  border-radius: 0.5rem;
  width: 7rem;
  color: white;
  margin: 1rem 0 0 0;
`;

const Reset = styled.button`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: #383854;
  max-width: 50%;
  background-color: rgba(255, 0, 0, 0.25);
  border: 0.05rem rgba(0, 0, 0, 0.5) solid;
  padding: 0.5rem 3.75rem;
  border-radius: 1rem;
  margin: 2rem 0;
  box-shadow: 0.2rem 0.2rem 0.3rem #888888;
`;

const Calculator = () => (
  <Container>
    <SubTitle>
      Please select your daily activity and choose the amout by clicking on it again
    </SubTitle>
    <Activitys>
      <IconContainer>
        <Icon>
          <Img src="/bottle.png" alt="" />
        </Icon>
        <Icon>
          <Img src="/glass.png" alt="" />
        </Icon>
        <Icon>
          <Img src="/flush.png" alt="" />
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <Img src="/washing-hands.png" alt="" />
        </Icon>
        <Icon>
          <Img src="/shower.png" alt="" />
        </Icon>
        <Icon>
          <Img src="/plumbing-pipe.png" alt="" />
        </Icon>
      </IconContainer>
      <Calculate>CALCULATE</Calculate>
    </Activitys>
    <ResultsContainer>
      <Results>
        <ResultsTitle>Your cost</ResultsTitle>
        <Numbers>5</Numbers>
      </Results>
      <Results>
        <ResultsTitle>LITERS</ResultsTitle>
        <Numbers>5</Numbers>
      </Results>
    </ResultsContainer>
    <Reset>RESET</Reset>
  </Container>
);

export default Calculator;
