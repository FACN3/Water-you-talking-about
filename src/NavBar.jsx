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
  max-height: 2rem;
  background-color: #383854;
  width: 100%;
`;

const Title = styled(Link)`
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border: 0.1rem solid #a3bdff;
  border-radius: 0.5rem;
  color: #a3bdff;
  font-size: 1rem;
  font-weight: normal;
  text-decoration: none;
  width: 15rem;
  margin: 1rem;
  padding: 0 1rem 0.2rem;

  @media only screen and (max-width: 700px) {
    font-size: 0.8rem;
    padding: 0;
    width: 10rem;
  }

  @media only screen and (max-width: 420px) {
    width: 8rem;
    font-size: 0.6rem;
    padding: 0.2rem;
  }
`;

const DropNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
`;

const DropdownBtn = styled.a`
  display: flex;
  position: absolute;
  cursor: pointer;
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
  position: absolute;
  display: ${props => (props.show ? 'flex' : 'none')};
  justify-content: center;
  text-align: center;
  background-color: #383854;
  width: 100%;
  animation-name: ${animationBar};
  animation-duration: 0.25s;
  animation-direction: normal;
  height: 2rem;
  margin: 0 0 1rem 0;
  padding: 0 0 0.5rem 0;

  @media only screen and (max-width: 700px) {
  }

  @media only screen and (max-width: 420px) {
    font-size: 0.87rem;
    margin: 0 0 0.5rem 0;
  }
`;

const HLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  width: 100%;
  color: #a3bdff;

  @media only screen and (max-width: 700px) {
    font-size: 1rem;
    padding: 0 1rem 0 0;
  }
  @media only screen and (max-width: 420px) {
    padding: 0;
    font-size: 0.55rem;
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

    this.DropMenuToggle = this.DropMenuToggle.bind(this);
  }

  DropMenuToggle() {
    this.setState({
      menuClick: !this.state.menuClick,
    });
  }

  render() {
    return (
      <NavContainer>
        <Nav>
          <MenuContainer>
            <DropdownBtn onClick={this.DropMenuToggle}>
              <i className="fa fa-bars" />
            </DropdownBtn>
            <Title to="/">Water You Talking About?</Title>
          </MenuContainer>
        </Nav>
        <DropNav>
          <DropdownMenu show={this.state.menuClick} id="button">
            <HLink onClick={this.DropMenuToggle} to="/">
              Home
            </HLink>
            <HLink onClick={this.DropMenuToggle} to="/calculator">
              Calculator
            </HLink>
            <HLink onClick={this.DropMenuToggle} to="/prices">
              Prices
            </HLink>
            <HLink onClick={this.DropMenuToggle} to="/statistics">
              Statistics
            </HLink>
          </DropdownMenu>
        </DropNav>
      </NavContainer>
    );
  }
}

export default NavBar;
