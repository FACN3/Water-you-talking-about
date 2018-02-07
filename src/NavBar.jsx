import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './styles/reset';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  height: 2rem;
  background-color: #383854;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  margin: 0 0 1rem 0;

  @media only screen and (max-width: 700px) {
    height: 10rem;
    font-size: 30px;
    padding: 0 2rem 0 0;
  }

  @media only screen and (max-width: 420px) {
    height: 5rem;
    font-size: 22px;
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
`;

const NavBar = () => (
  <Nav>
    <HLink to="/">Home</HLink>
    <HLink to="/calculator">Calculator</HLink>
    <HLink to="prices">Prices</HLink>
    <HLink to="statistis">Statistics</HLink>
  </Nav>
);

export default NavBar;
