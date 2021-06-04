
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
    fetch('http://localhost:3001/posts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title: this.state.title, content: this.state.text})
    })
      .then(response => response.json())
      .then(data => this.props.addPost({id: data.id, title: data.title, text: data.content}))
    this.setState({
      title: "",
      text: ""
    })
  }

  render() {
    return (
      <div className="container p-3 my-3 bg-dark text-white">
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label className="form-label>">List the Show or Movie You Are Binging Right Now:</label>
            <input type="text" id="title" onChange={event => this.handleOnTitleChange(event)} className="form-control" value={this.state.title}/>
            <label className="form-label">Post:</label>
            <input type="text" onChange={event => this.handleOnContentChange(event)} className="form-control" value={this.state.text}/><br />
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
};

export default PostInput;