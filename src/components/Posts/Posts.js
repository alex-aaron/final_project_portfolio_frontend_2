import React, { Component } from 'react';
import Post from '../Posts/Post'

class Posts extends Component {
  
  renderPosts = () => {
    return (
    this.props.posts.map(post => <Post key={post.id} post={post} deletePost={this.props.deletePost} />))
  }
  
  render() {
    return(
      <ul>
        {this.renderPosts()}
      </ul>
    );
  }
};

export default Posts;