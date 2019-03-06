import React, { Component } from 'react';
import Navbar from './Navbar'
import logo from './rescources/secret_logo.png'

function AboutPage (props) {

  return (
    <div>
      <Navbar selection={"About"}/>
      <h1>About Secret</h1>
      <img src={logo} />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur beatae veniam necessitatibus magnam repellendus odit dolores aut minima, doloremque facere voluptas fuga saepe, eum. Voluptates alias, adipisci harum impedit est.</p>
    </div>
  );
}

export default AboutPage;
