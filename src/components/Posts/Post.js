import React, { Component } from 'react';
// import ReviewsContainer from '../../containers/ReviewsContainer';

class Post extends Component {


  render() {


    return (
      <div>
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.text}</p>
      </div>
    );
  }
};

export default Post;
