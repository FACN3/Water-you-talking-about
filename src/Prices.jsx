import React, { Component } from 'react';
import styled from 'styled-components';

// styling

const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: #383854;
  margin: 2rem 0;
  font-size: 2rem;
  @media only screen and (max-width: 420px) {
    margin: 0.25rem 0;
  }
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  width: 50%;
  color: #383854;
  @media only screen and (max-width: 700px) {
    font-size: 0.75rem;
  }
  @media only screen and (max-width: 420px) {
    width: 75%;
  }
`;

const IconAligner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  @media only screen and (max-width: 420px) {
    margin: 0;
  }
`;

const IconContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const Icon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  color: white;
  background-color: #383854;
  border: 0.05rem rgba(255, 255, 255, 0.75) solid;
  box-shadow: 0.2rem 0.2rem 0.3rem #888888;
  margin: 0.5rem 2rem;
  padding: 3rem 2rem;
  height: 4rem;
  @media only screen and (max-width: 700px) {
  }
  @media only screen and (max-width: 420px) {
    padding: 2rem 1rem;
    margin: 0.5rem;
  }
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
`;

const Info = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  border: 0.05rem rgba(255, 255, 255, 0.8) solid;
  box-shadow: 0.2rem 0.2rem 0.3rem #888888;
  top: 2.5rem;
  padding: 2rem 10rem;
  @media only screen and (max-width: 700px) {
  }
  @media only screen and (max-width: 420px) {
    top: 4rem;
    padding: 6rem 3rem;
  }
`;

const Stats = styled.h3``;

const SubStats = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

const Days = styled.h3`
  margin-top: 5rem;
  font-size: 1rem;
`;

const Message = styled.p`
  margin-top: 0.75rem;
  font-size: 0.75rem;
`;

// Functionality

class Prices extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // App

  render() {
    return (
      <Container>
        <SubTitle>Please write the amount of time/minutes you used in each activity below</SubTitle>

        <IconContainer>
          <IconAligner>
            <Icon>
              <Img src="/bottle.png" alt="bottle" />
            </Icon>
            <Icon>
              <Img src="/glass.png" alt="glass" />
            </Icon>
            <Icon>
              <Img src="/flush.png" alt="flush" />
            </Icon>
          </IconAligner>
          <Info>
            <Stats>Stats</Stats>
            <SubStats>An average shower is 8 minutes a day </SubStats>
            <Days>In a Day</Days>
            <Message>you will use 65 liters and pay 0.04005 ₪ on shower</Message>
            <Days>In 1 Month</Days>
            <Message>you will use 1950 liters and pay 17.355 ₪ on shower</Message>
            <Days>In 1 Year </Days>
            <Message>you will use 23400 liters and pay 208.26 ₪ on shower</Message>
          </Info>
          <IconAligner>
            <Icon>
              <Img src="/washing-hands.png" alt="washing hands" />
            </Icon>
            <Icon>
              <Img src="/shower.png" alt="Shower" />
            </Icon>
            <Icon>
              <Img src="/plumbing-pipe.png" alt="plumbing pipe" />
            </Icon>
          </IconAligner>
        </IconContainer>
      </Container>
    );
  }
}
export default Prices;
