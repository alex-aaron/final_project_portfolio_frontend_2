import React, { Component } from 'react';

class CommentInput extends Component {

  constructor(props) {
    super() 
      this.state = {
        postId: "",
        text: ""
      }
  }

  handleOnCommentChange = event => {
    this.setState({
      postId: parseInt(this.props.postId),
      text: event.target.value
    })
  }

  handleOnCommentSubmit = event => {
    event.preventDefault();
    this.props.addComment({postId: this.state.postId, text: this.state.text});
    fetch('http://localhost:3001/comments', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({post_id: this.state.postId, content: this.state.text})
    })
  }

  render() {
    return (
      <div className="container p-3 my-3 bg-dark text-white">
        <form onSubmit={event => this.handleOnCommentSubmit(event)}>
          <div>
            <label className="form-label>">Add Comment:</label>
            <input type="text" id="content" onChange={event => this.handleOnCommentChange(event)} className="form-control"/><br />
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
};

export default CommentInput;