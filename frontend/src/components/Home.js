import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SecretPanel from './SecretPanel'
import Navbar from './Navbar'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar selection={"Home"}/>
        <SecretPanel />
      </div>
    );
  }
};

export default Home;
