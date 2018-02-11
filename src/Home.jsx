import React, { Component } from 'react';
import NavBar from './NavBar';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Hello this is home</h1>
      </div>
    );
  }
}

export default Home;
