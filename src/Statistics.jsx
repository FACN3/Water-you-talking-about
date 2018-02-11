import React, { Component } from 'react';
import NavBar from './NavBar';

class Statistics extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <br />
        <h1>Hello this is stats</h1>
      </div>
    );
  }
}

export default Statistics;
