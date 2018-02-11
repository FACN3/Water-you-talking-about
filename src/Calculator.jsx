import React, { Component } from 'react';
import NavBar from './NavBar';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Hello this is Calculator</h1>
      </div>
    );
  }
}

export default Calculator;
