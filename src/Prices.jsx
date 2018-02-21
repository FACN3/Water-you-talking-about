import React, { Component } from 'react';
import styled from 'styled-components';
import prices from './fixtures/prices';
import pricesLogic from './lib/Prices';
// styling

const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: #383854;
  margin-top: 1rem;
  font-size: 2rem;
  @media only screen and (max-width: 420px) {
    margin: 0.25rem 0;
  }
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  width: 100%;
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
  display: block;
  align-items: center;
  cursor: pointer;
  border-radius: 1rem;
  color: white;
  background-color: #383854;
  border: 0.05rem rgba(255, 255, 255, 0.75) solid;
  box-shadow: 0.2rem 0.2rem 0.3rem #888888;
  margin: 0.25rem 2rem;
  padding: 2rem 2rem 2rem 2rem;
  height: 6rem;
  @media only screen and (max-width: 700px) {
  }
  @media only screen and (max-width: 420px) {
    padding: 2rem 1rem;
    margin: 0.25rem;
  }
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  @media only screen and (max-width: 420px) {
  }
`;

const Info = styled.section`
  position: absolute;
  display: ${props => props.show};
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-radius: 1rem;
  color: white;
  width: 30rem;
  background-color: rgba(0, 0, 0, 0.9);
  border: 0.05rem rgba(255, 255, 255, 0.8) solid;
  box-shadow: 0.2rem 0.2rem 0.3rem #888888;
  top: 2.5rem;
  padding: 2rem 5rem;
  @media only screen and (max-width: 700px) {
  }
  @media only screen and (max-width: 420px) {
    top: 4rem;
    width: 9rem;
    padding: 0.5rem 1rem 2.5rem 1rem;
  }
`;

const Stats = styled.h3`
  @media only screen and (max-width: 420px) {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

const SubStats = styled.h3`
  margin: 0;
  font-size: 1rem;
  @media only screen and (max-width: 420px) {
    font-size: 0.5rem;
    margin-bottom: 0;
  }
`;

const Days = styled.h3`
  margin-top: 3rem;
  font-size: 1rem;
  @media only screen and (max-width: 420px) {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

const Message = styled.p`
  font-size: 0.75rem;
  @media only screen and (max-width: 420px) {
    font-size: 0.5rem;
    width: 8rem;
  }
`;

// Functionality

class Prices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {},
      show: 'none',
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  handleClick(userClick) {
    const info = pricesLogic(prices, userClick);
    this.setState({
      activity: info,
      show: 'flex',
    });
  }

  resetClick() {
    this.setState({
      show: 'none',
    });
  }

  // App

  render() {
    return (
      <Container>
        <SubTitle>Please write the amount of time/minutes you used in each activity below</SubTitle>
        <IconContainer>
          <IconAligner>
            <Icon onClick={() => this.handleClick('Bottle')}>
              <Img src="/bottle.png" alt="bottle" />
            </Icon>
            <Icon onClick={() => this.handleClick('Cup')}>
              <Img src="/glass.png" alt="glass" />
            </Icon>
            <Icon onClick={() => this.handleClick('Toilet')}>
              <Img src="/flush.png" alt="flush" />
            </Icon>
          </IconAligner>
          <Info show={this.state.show} onClick={() => this.resetClick()}>
            <Stats>Stats</Stats>
            <SubStats>{this.state.activity.stats}</SubStats>
            <Days>In a Day</Days>
            <Message>{this.state.activity.day}</Message>
            <Days>In 1 Month</Days>
            <Message>{this.state.activity.month}</Message>
            <Days>In 1 Year </Days>
            <Message>{this.state.activity.year}</Message>
          </Info>
          <IconAligner>
            <Icon onClick={() => this.handleClick('Washing hands')}>
              <Img src="/washing-hands.png" alt="washing hands" />
            </Icon>
            <Icon onClick={() => this.handleClick('Shower')}>
              <Img src="/shower.png" alt="Shower" />
            </Icon>
            <Icon onClick={() => this.handleClick('Faucet tap')}>
              <Img src="/plumbing-pipe.png" alt="plumbing pipe" />
            </Icon>
          </IconAligner>
        </IconContainer>
      </Container>
    );
  }
}
export default Prices;
