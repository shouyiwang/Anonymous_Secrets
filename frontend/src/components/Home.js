import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SecretPanel from './SecretPanel'

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to Home</h2>
        <Link to="/new_secret">create secret</Link>

        <SecretPanel />
      </div>
    );
  }
};

export default Home;
