import React, { Component } from 'react';
import Post from '../Posts/Post';

class Posts extends Component {

  renderPosts = () => {
    return (
    this.props.posts.map(post => 
      <div>
        <Post key={post.id} post={post} deletePost={this.props.deletePost} />
      </div>))
  }

  componentDidMount() {
    if (this.props.posts.length < 1) {
      this.props.fetchPosts();
    } 
  }

  render() {
    return(
      <div>
        {this.renderPosts()}
      </div>
    );
  }
};

export default Posts;