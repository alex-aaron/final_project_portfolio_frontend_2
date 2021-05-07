import React, { Component } from 'react';
// import Post from '../Posts/Post'




class PostShow extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
          <h1>Post Show Component</h1>
          {/* <Post /> */}
          {/* <CommentsContainer /> */}
      </div>
    );
  }
};

export default PostShow;