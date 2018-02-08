import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './styles/reset';

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  max-height: 3rem;
  background-color: #383854;
  width: 100%;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  border: 2px solid #a3bdff;
  border-radius: 1rem;
  color: #a3bdff;
  font-size: 24px;
  width: 20rem;
  font-weight: bold;
  margin: 1rem;
  padding: 0 1rem 0.2rem;

  @media only screen and (max-width: 700px) {
    font-size: 22px;
    width: 11.5em;
  }

  @media only screen and (max-width: 400px) {
    font-size: 22px;
  }
`;

const Nav2 = styled.nav`
  display: flex;
  align-content: center;
  flex-direction: row;
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

const DropdownMenu = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  justify-content: center;
  text-align: center;
  height: 2rem;
  background-color: #383854;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  margin: 0 0 1rem 0;

  @media only screen and (max-width: 700px) {
    font-size: 22px;
    padding: 0 2rem 0 0;
  }

  @media only screen and (max-width: 420px) {
    font-size: 14px;
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
  font-size: 24px;
  margin: 0 10rem 0 10rem;

  @media only screen and (max-width: 1025px) {
    margin: 0 5.5rem 0 5.5rem;
  }

  @media only screen and (max-width: 700px) {
    font-size: 14px;
    margin: 0 1.5rem 0 1.5rem;
  }
`;

// const DropMenuContainer = styled.div``;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    return (
      <NavContainer>
        <Nav>
          <MenuContainer>
            <DropdownBtn onClick={this.handleClick}>
              <i className="fa fa-bars" />
            </DropdownBtn>
            <Title>Water You Talking About?</Title>
          </MenuContainer>
        </Nav>
        <Nav2>
          <DropdownMenu show={this.state.clicked} id="button">
            <HLink to="/">Home</HLink>
            <HLink to="/calculator">Calculator</HLink>
            <HLink to="prices">Prices</HLink>
            <HLink to="statistis">Statistics</HLink>
          </DropdownMenu>
        </Nav2>
      </NavContainer>
    );
  }
}

export default NavBar;
