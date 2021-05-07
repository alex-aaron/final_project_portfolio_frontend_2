import React, { Component } from 'react';
import Post from '../Posts/Post'

class PostShow extends Component {

  getPosts = id => {
    console.log(`http://localhost:3001/posts/${id}`)
    fetch(`http://localhost:3001/posts/${id}`)
      .then(response => response.json())
      .then(post => <Post post={post} />);
  }

  render() {
    let postId = this.props.location.pathname.split("/")[2];
    return (
      <div>
          <h1>Post Show Component</h1>
          {this.getPosts(postId)}
          {/* <CommentsContainer /> */}
      </div>
    );
  }
};

export default PostShow;