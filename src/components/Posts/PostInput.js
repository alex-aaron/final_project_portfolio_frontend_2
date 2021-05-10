
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
      <div className="post-input-container">
        <h5>What are you watching right now?</h5>
        <form onSubmit={this.handleOnSubmit}>
          <div className="ml-2 mr-2">
            <label className="form-label>">Show/Movie Title:</label>
            <input type="text" id="title" onChange={event => this.handleOnTitleChange(event)} className="form-control"/>
            <label className="form-label">Post:</label>
            <input type="text" onChange={event => this.handleOnContentChange(event)} className="form-control" /><br />
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
};

export default PostInput;