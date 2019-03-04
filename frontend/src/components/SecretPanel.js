import React, { Component } from 'react';
import axios from 'axios';
import SecretCard from './SecretCard';

const SECRET_URL = 'http://localhost:3000/secrets.json';

class SecretPanel extends Component {
  constructor() {
    super();
    this.state = {
      secrets: []
    };
  }

  componentDidMount() {
    this.fetchSecrets();
  }

  fetchSecrets = () => {
    axios.get(SECRET_URL).then( (results) => {
      this.setState({secrets: results.data});
    });
  };

  render() {
    return (
      <div>
        <ul>
          { this.state.secrets.map( (s) => <li className="inline" key={s.id}><SecretCard secret={s}/></li> ) }
        </ul>
      </div>
    );
  }
}

export default SecretPanel;
