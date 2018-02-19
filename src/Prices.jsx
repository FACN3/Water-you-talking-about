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
    padding: 3rem 1rem;
  }
  @media only screen and (max-width: 420px) {
    padding: 3rem 0.5rem;
    margin: 0.5rem;
  }
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
`;

const Message = styled.p`
  position: absolute;
  display: flex;
  border-radius: 1rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  border: 0.05rem rgba(255, 255, 255, 0.8) solid;
  box-shadow: 0.2rem 0.2rem 0.3rem #888888;
  top: 7rem;
  padding: 2rem 10rem 18rem 10rem;
  @media only screen and (max-width: 700px) {
    padding: 3rem 1rem;
  }
  @media only screen and (max-width: 420px) {
    padding: 3rem 0.5rem;
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
          <Message>Information </Message>
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
