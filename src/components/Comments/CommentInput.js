import React, { Component } from 'react';

class CommentInput extends Component {

  constructor(props) {
    super() 
      this.state = {
        postId: "",
        text: ""
      }
  }

  handleOnChange = event => {
    this.setState({
      postId: parseInt(this.props.postId),
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addComment({postId: this.state.postId, text: this.state.text});
    fetch('http://localhost:3001/comments', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({postId: this.state.postId, content: this.state.text})
    })
  }

  render() {
    return (
      <div>
        <form>
        <input type="text" id="content" onChange={event => this.handleOnChange(event)} />
        <input type="submit" onSubmit={this.handleOnSubmit} />
        </form>
      </div>
    );
  }
};

export default CommentInput;