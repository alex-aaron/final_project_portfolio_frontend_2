import React, { Component } from 'react';

class PostInput extends Component {

  constructor(props) {
    super() 
      this.state = {
        title: "",
        text: ""
      }
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addPost(this.state.text);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={event => this.handleOnChange(event)} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default PostInput;