import React, { Component } from 'react';
import Post from '../Posts/Post'

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }
  
  renderPosts = () => {
    return (
    this.props.posts.map(post => <Post key={post.id} post={post} deletePost={this.props.deletePost} />))
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