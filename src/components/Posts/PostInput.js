import React, { Component } from 'react';

class PostInput extends Component {

  constructor(props) {
    super() 
      this.state = {
        title: "",
        text: ""
      }
  }

  handleOnTitleChange = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleOnContentChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addPost({title: this.state.title, text: this.state.text});
    fetch('http://localhost:3001/posts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title: this.state.title, content: this.state.text})
    })
  }

  render() {
    return (
      <div>
        <h1>What are you watching right now?</h1>
        <form onSubmit={this.handleOnSubmit}>
          <label>Show/Movie Title:</label>
          <input type="text" id="title" onChange={event => this.handleOnTitleChange(event)}/><br /><br />
          <label>Post:</label>
          <input type="text" onChange={event => this.handleOnContentChange(event)} /><br /><br />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default PostInput;