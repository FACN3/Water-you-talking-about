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

const IconContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  @media only screen and (max-width: 420px) {
    margin: 0;
  }
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
`;

const Icon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1rem;
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
        <h1>Hello</h1>

        <IconContainer>
          <Icon>
            <Img src="/bottle.png" alt="bottle" />
          </Icon>
          <Icon>
            <Img src="/glass.png" alt="glass" />
          </Icon>
          <Icon>
            <Img src="/flush.png" alt="flush" />
          </Icon>
        </IconContainer>
        <IconContainer>
          <Icon>
            <Img src="/washing-hands.png" alt="washing hands" />
          </Icon>
          <Icon>
            <Img src="/shower.png" alt="Shower" />
          </Icon>
          <Icon>
            <Img src="/plumbing-pipe.png" alt="plumbing pipe" />
          </Icon>
        </IconContainer>
      </Container>
    );
  }
}
export default Prices;
