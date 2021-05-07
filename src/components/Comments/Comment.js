import React, { Component } from 'react';
// import ReviewsContainer from '../../containers/ReviewsContainer';

class Post extends Component {


  render() {

    return (
      <div>
        <p>{this.props.comment.content}</p>
      </div>
    );
  }
};

export default Post;
