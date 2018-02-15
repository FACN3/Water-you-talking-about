import React, { Component } from 'react';
import styled from 'styled-components';

// styling

const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: #383854;
  margin: 2rem 0 2rem 0;
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
    padding: 1rem 1rem;
  }

  @media only screen and (max-width: 420px) {
    padding: 0;
  }
`;

const IconContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 1rem 0 0 0;

  @media only screen and (max-width: 420px) {
    margin: 0;
  }
`;

const Icon = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  color: white;
  background-color: #383854;
  border: 0.05rem rgba(255, 255, 255, 0.75) solid;
  box-shadow: 0.2rem 0.2rem 0.3rem #888888;
  margin: 0 0.5rem;
  padding: 2rem 2rem;
  height: 4rem;

  @media only screen and (max-width: 700px) {
    padding: 1rem 1rem;
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
  font-weight: bold;
  margin: 0.25rem 0 0 0;
`;

const Calculate = styled.button`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: #383854;
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

const Pic1 = styled.section`
  display: ${props => props.show};
`;
const Pic2 = styled.section`
  display: ${props => props.show};
`;
const Pic3 = styled.section`
  display: ${props => props.show};
`;
const Pic4 = styled.section`
  display: ${props => props.show};
`;
const Pic5 = styled.section`
  display: ${props => props.show};
`;
const Pic6 = styled.section`
  display: ${props => props.show};
`;

// Functionality

class Calculator extends Component {
  constructor(props) {
    super(props);
    /* eslint-disable */
    console.log('props is:', this.props);
    this.state = {
      Toilet: 0,
      Shower: 0,
      'Faucet tap': 0,
      'Washing hands': 0,
      Cup: 0,
      Bottle: 0,
      show: 'none',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(userChoice) {
    this.setState({
      [userChoice]: this.state[userChoice] + 1,
      show: (this.state.show = 'normal'),
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
              <Pic1 show={this.state.show}>
                <Value>x {this.state.Bottle}</Value>
              </Pic1>
            </Icon>
            <Icon onClick={() => this.handleClick('Cup')}>
              <Img src="/glass.png" alt="glass" />
              <Pic2 show={this.state.show}>
                <Value>x {this.state.Cup}</Value>
              </Pic2>
            </Icon>
            <Icon onClick={() => this.handleClick('Toilet')}>
              <Img src="/flush.png" alt="flush" />
              <Pic3 show={this.state.show}>
                <Value>x {this.state.Toilet}</Value>
              </Pic3>
            </Icon>
          </IconContainer>
          <IconContainer>
            <Icon onClick={() => this.handleClick('Washing hands')}>
              <Img src="/washing-hands.png" alt="washing hands" />
              <Pic4 show={this.state.show}>
                <Value>{this.state['Washing hands']} Mins</Value>
              </Pic4>
            </Icon>
            <Icon onClick={() => this.handleClick('Shower')}>
              <Img src="/shower.png" alt="shower" />
              <Pic5 show={this.state.show}>
                <Value>{this.state.Shower} Mins</Value>
              </Pic5>
            </Icon>
            <Icon onClick={() => this.handleClick('Faucet tap')}>
              <Img src="/plumbing-pipe.png" alt="plumbing pipe" />
              <Pic6 show={this.state.show}>
                <Value>{this.state['Faucet tap']} Mins</Value>
              </Pic6>
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
            <ResultsTitle>Liters</ResultsTitle>
            <Numbers>5</Numbers>
          </Results>
        </ResultsContainer>
      </Container>
    );
  }
}
export default Calculator;
