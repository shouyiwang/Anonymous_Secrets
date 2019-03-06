import React, { Component } from 'react';
import axios from 'axios';
import NewComment from './NewComment'
import Navbar from './Navbar'

const SECRET_URL = 'http://localhost:3000/secrets/';

class SecretPage extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      category: "",
      likes: 0,
      dislikes: 0,
      comments: []
    };
  }

  componentDidMount() {
    this.fetchSecret();
  }

  fetchSecret = () => {
    axios.get(`${SECRET_URL}${this.props.match.params.id}.json`).then( (result) => {
      this.setState({
        content: result.data.content,
        category: result.data.category,
        likes: result.data.likes,
        dislikes: result.data.dislikes,
        comments: result.data.comments
      });

    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1>Secret:</h1>
        <Content content={this.state.content} />
        likes: {this.state.likes} dislikes: {this.state.dislikes}
        <h2>{this.state.comments.length} Comments</h2>
        <ul>
          { this.state.comments.reverse().map( (s) => <li key={s.id}>{s.content}</li> ) }
        </ul>
        <NewComment id={this.props.match.params.id}/>
      </div>
    );
  }
}

const Content = function({content}) {
  return (<p>{content}</p> );
}


export default SecretPage;
