import React, { Component } from 'react';
import styled from 'styled-components';
import calculatorLogic from './lib/Calculator';
import data from './fixtures/data';

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

const Activitys = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  color: #383854;
  max-width: 50%;
  border-radius: 1rem;

  @media only screen and (max-width: 700px) {
    align-items: center;
    padding: 1rem;
  }

  @media only screen and (max-width: 420px) {
    padding: 0;
  }
`;

const IconContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  @media only screen and (max-width: 420px) {
    margin: 0;
  }
`;

const Icon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border-radius: 1rem;
  outline: 0px;
  color: white;
  background-color: #383854;
  border: 0.05rem rgba(255, 255, 255, 0.75) solid;
  box-shadow: 0.2rem 0.2rem 0.3rem #888888;
  margin: 0 0.5rem;
  padding: 3rem;
  height: 4rem;

  @media only screen and (max-width: 700px) {
    padding: 1rem;
  }
  @media only screen and (max-width: 420px) {
    margin: 0.5rem;
  }
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
`;

const Value = styled.h3`
  display: flex;
  opacity: ${props => props.shows};
  align-self: center;
  font-weight: bold;
  margin-top: 0.25rem;
`;

const HyperLink = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const Calculate = styled.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  outline: 0px;
  font-size: 1rem;
  font-weight: bold;
  color: #525010;
  max-width: 50%;
  background-color: rgba(255, 221, 0, 0.5);
  border: 0.05rem rgba(0, 0, 0, 0.5) solid;
  padding: 0.5rem 10rem;
  border-radius: 0.5rem;
  margin: 2rem 0;
  box-shadow: 0.2rem 0.2rem 0.3rem #888888;

  @media only screen and (max-width: 700px) {
    padding: 0.25rem 6rem;
    margin: 1rem 0;
  }
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

  @media only screen and (max-width: 700px) {
    padding: 0.5rem;
  }
`;

const ResultsTitle = styled.h2`
  font-size: 1.5rem;
  color: white;

  @media only screen and (max-width: 700px) {
    font-size: 0.75rem;
  }
`;

const Numbers = styled.section`
  background-color: rgba(255, 255, 255, 0.5);
  border: white 0.05rem solid;
  border-radius: 0.5rem;
  width: 7rem;
  color: white;
  margin: 1rem 0 0 0;
  @media only screen and (max-width: 700px) {
    width: 4rem;
    font-size: 1rem;
  }
`;

// Functionality

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoices: {
        Toilet: 0,
        Shower: 0,
        'Faucet tap': 0,
        'Washing hands': 0,
        Cup: 0,
        Bottle: 0,
      },
      cost: 0,
      liters: 0,
      shows: {
        Toilet: 0,
        Shower: 0,
        'Faucet tap': 0,
        'Washing hands': 0,
        Cup: 0,
        Bottle: 0,
      },
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(userChoice) {
    this.setState({
      userChoices: {
        ...this.state.userChoices,
        [userChoice]: this.state.userChoices[userChoice] + 1,
      },
      shows: {
        ...this.state.shows,
        [userChoice]: '1',
      },
    });
  }

  handleSubmit() {
    const { cost, liters } = calculatorLogic(data, this.state.userChoices);
    this.setState({
      cost,
      liters,
      userChoices: {
        Toilet: 0,
        Shower: 0,
        'Faucet tap': 0,
        'Washing hands': 0,
        Cup: 0,
        Bottle: 0,
      },
      shows: {
        Toilet: 0,
        Shower: 0,
        'Faucet tap': 0,
        'Washing hands': 0,
        Cup: 0,
        Bottle: 0,
      },
    });
  }
  // App

  render() {
    return (
      <Container>
        <SubTitle>
          Please select your daily activity and choose the amout by clicking on it again
        </SubTitle>
        <Activitys>
          <IconContainer>
            <Icon onClick={() => this.handleClick('Bottle')}>
              <Img src="/bottle.png" alt="bottle" />
              <Value shows={this.state.shows.Bottle}>x {this.state.userChoices.Bottle}</Value>
            </Icon>
            <Icon onClick={() => this.handleClick('Cup')}>
              <Img src="/glass.png" alt="glass" />
              <Value shows={this.state.shows.Cup}>x {this.state.userChoices.Cup}</Value>
            </Icon>
            <Icon onClick={() => this.handleClick('Toilet')}>
              <Img src="/flush.png" alt="flush" />
              <Value shows={this.state.shows.Toilet}>x {this.state.userChoices.Toilet}</Value>
            </Icon>
          </IconContainer>
          <IconContainer>
            <Icon onClick={() => this.handleClick('Washing hands')}>
              <Img src="/washing-hands.png" alt="washing hands" />
              <Value shows={this.state.shows['Washing hands']}>
                {this.state.userChoices['Washing hands']} Mins
              </Value>
            </Icon>
            <Icon onClick={() => this.handleClick('Shower')}>
              <Img src="/shower.png" alt="Shower" />
              <Value shows={this.state.shows.Shower}>{this.state.userChoices.Shower} Mins</Value>
            </Icon>
            <Icon onClick={() => this.handleClick('Faucet tap')}>
              <Img src="/plumbing-pipe.png" alt="plumbing pipe" />
              <Value shows={this.state.shows['Faucet tap']}>
                {this.state.userChoices['Faucet tap']} Mins
              </Value>
            </Icon>
          </IconContainer>
          <HyperLink href="#results">
            <Calculate onClick={() => this.handleSubmit()}>CALCULATE</Calculate>
          </HyperLink>
        </Activitys>
        <ResultsContainer id="results">
          <Results>
            <ResultsTitle>Your cost</ResultsTitle>
            <Numbers>{this.state.cost.toFixed(3)} ₪</Numbers>
          </Results>
          <Results>
            <ResultsTitle>Liters</ResultsTitle>
            <Numbers>{this.state.liters}</Numbers>
          </Results>
        </ResultsContainer>
      </Container>
    );
  }
}
export default Calculator;
