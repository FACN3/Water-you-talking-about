import React, { Component } from 'react';
import NavBar from './NavBar';

class Prices extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <br />
        <h1>Hello this is Prices</h1>
      </div>
    );
  }
}

export default Prices;
