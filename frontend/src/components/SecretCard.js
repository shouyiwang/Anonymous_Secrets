import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import SecretPage from './SecretPage'

class SecretCard extends Component {
  render() {
    return (
      <div className="card">
        <Link to={`/secret_page/${this.props.secret.id}`}>{this.props.secret.content}</Link>

        <br />
        likes: {this.props.secret.likes} &nbsp;
        dislikes: {this.props.secret.dislikes}  &nbsp;
        comments: {this.props.secret.comments_size}
      </div>
    );
  }
}

export default SecretCard;
