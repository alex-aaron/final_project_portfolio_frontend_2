import React, { Component } from 'react';
// import ReviewsContainer from '../../containers/ReviewsContainer';

class Post extends Component {

  handleOnClick = () => {
    this.props.deletePost(this.props.post.id)
  }
  render() {


    return (
      <div>
        <li>
          {this.props.posts.text}
          <button onClick={this.handleOnClick}> Delete </button>
        </li>
      </div>
    );
  }
};

export default Post;
