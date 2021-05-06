import React, { Component } from 'react';
import Post from '../Posts/Post'

class Posts extends Component {

  renderPosts = () => {
    return (
    this.props.posts.map(post => <Post key={post.id} post={post} deletePost={this.props.deletePost} />))
  }

  componentDidMount() {
    console.log("Component Mounted!");
    this.props.fetchPosts()
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