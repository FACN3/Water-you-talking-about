import React from 'react';
import styled from 'styled-components';
import './styles/reset';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #383854;
  color: #a3bdff;
  font-size: 18px;
  height: 2rem;
  width: 100%;
  font-weight: bold;
  margin: 0 0 1rem 0;
  padding: 1rem 0 0 0;
`;

const NavBar = () => <Nav>Hello</Nav>;

export default NavBar;
