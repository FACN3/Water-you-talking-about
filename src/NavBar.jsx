import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import './styles/reset';

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  max-height: 3rem;
  background-color: #383854;
  width: 100%;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  border: 0.1rem solid #a3bdff;
  border-radius: 1rem;
  color: #a3bdff;
  font-size: 1.5rem;
  width: 20rem;
  font-weight: bold;
  margin: 1rem;
  padding: 0 1rem 0.2rem;

  @media only screen and (max-width: 700px) {
    font-size: 1rem;
    padding: 0 0.5rem 0.5rem;
    width: 11.5em;
  }

  @media only screen and (max-width: 400px) {
    font-size: 0.6rem;
    padding: 0 0.5rem 0.2rem;
  }
`;

const DropNav = styled.nav`
  display: flex;
  align-content: center;
  max-height: 2.5rem;
  width: 100%;
`;

const DropdownBtn = styled.a`
  display: flex;
  position: absolute;
  left: 0;
  align-items: flex-start;
  color: #a3bdff;
  margin: 0 0 0 1rem;
`;

const animationBar = keyframes`
  0% {
    height: 0rem;
    margin: 0 0 0rem 0;
   }
  100% {
    height: 2rem;
    margin: 0 0 1rem 0;
   }
  `;

const DropdownMenu = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  justify-content: center;
  text-align: center;
  background-color: #383854;
  font-size: 1.12rem;
  font-weight: bold;
  width: 100%;
  animation-name: ${animationBar};
  animation-duration: 0.25s;
  animation-direction: normal;
  height: 2rem;
  margin: 0 0 1rem 0;

  @media only screen and (max-width: 700px) {
    padding: 0 2rem 0 0;
  }

  @media only screen and (max-width: 420px) {
    font-size: 0.87rem;
    padding: 0 1rem 0 0;
  }
`;

const HLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 100%;
  color: #a3bdff;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 1rem 0 1rem 0;
  margin: 0 5.5rem 0 5.5rem;

  @media only screen and (max-width: 1025px) {
    margin: 0 4rem 0 4rem;
  }

  @media only screen and (max-width: 700px) {
    font-size: 0.87rem;
    margin: 0 0.8rem 0 0.8rem;
  }
  @media only screen and (max-width: 400px) {
    font-size: 0.5rem;
    margin: 0 0.5rem 0 0.5rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      menuClick: false,
    };
  }

  render() {
    return (
      <NavContainer>
        <Nav>
          <MenuContainer>
            <DropdownBtn
              onClick={() =>
                this.setState({
                  menuClick: !this.state.menuClick,
                })
              }
            >
              <i className="fa fa-bars" />
            </DropdownBtn>
            <Title>Water You Talking About?</Title>
          </MenuContainer>
        </Nav>
        <DropNav>
          <DropdownMenu show={this.state.menuClick} id="button">
            <HLink to="/">Home</HLink>
            <HLink to="/calculator">Calculator</HLink>
            <HLink to="/prices">Prices</HLink>
            <HLink to="/statistics">Statistics</HLink>
          </DropdownMenu>
        </DropNav>
      </NavContainer>
    );
  }
}

export default NavBar;
