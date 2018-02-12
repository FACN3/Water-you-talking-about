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
  color: #383854;
`;

const Submit = styled.section`
  font-size: 1rem;
  max-width: 50%;
  background-color: rgba(0, 0, 0, 0.25);
  border: 0.05rem rgba(0, 0, 0, 0.5) solid;
  padding: 0.5rem 7.5rem;
  border-radius: 0.5rem;
`;

const Content = styled.section`
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

const Icon = styled.div`
  border-radius: 1rem;
  color: white;
  background-color: #383854;
  margin: 1rem 1rem;
  padding: 1rem 2rem 5rem 2rem;
`;

const Calculator = () => (
  <Container>
    <SubTitle>
      Please select your daily activity and choose the amout by clicking on it again
    </SubTitle>
    <Content>
      <IconContainer>
        <Icon>
          <i className="fa fa-bath" />
        </Icon>
        <Icon>
          <i className="fa fa-bath" />
        </Icon>
        <Icon>
          <i className="fa fa-bath" />
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <i className="fa fa-bath" />
        </Icon>
        <Icon>
          <i className="fa fa-bath" />
        </Icon>
        <Icon>
          <i className="fa fa-bath" />
        </Icon>
      </IconContainer>
      <Submit>Calculate</Submit>
    </Content>
  </Container>
);

export default Calculator;
