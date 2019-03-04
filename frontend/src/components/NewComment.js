import React, { Component } from 'react';
import axios from 'axios';

const COMMENT_URL = 'http://localhost:3000/comments.json';

class NewComment extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.saveComment(this.state);
    this.setState({
      content: '',
    });
  }

  _handleChange(e) {
    this.setState( { content: e.target.value } );
  }

  saveComment({content}) {
    console.log(this.props.id);
    axios.post(COMMENT_URL, {content: content, secret_id: this.props.id}).then((results) => {
    });
  }


  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value={ this.state.content }></textarea>
        <input type="submit" value="Submit Your Comment" />
      </form>
    );
  }
}

export default NewComment;
