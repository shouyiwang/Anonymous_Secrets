import React, { Component } from 'react';
import axios from 'axios';

const SECRET_URL = 'http://localhost:3000/secrets.json';

class NewSecret extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      category: 'normal',
      likes: 0,
      dislikes: 0
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.saveSecret(this.state);
    this.setState({
      content: '',
      category: 'normal',
      likes: 0,
      dislikes: 0
    }); 
  }

  _handleChange(e) {
    this.setState( { content: e.target.value } );
  }

  saveSecret({content, category, likes, dislikes}) {
    axios.post(SECRET_URL, {content: content, category: category, likes: likes, dislikes: dislikes}).then((results) => {
    });
  }


  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value={ this.state.content }></textarea>
        <input type="submit" value="Submit Your Secret" />
      </form>
    );
  }
}

export default NewSecret;
