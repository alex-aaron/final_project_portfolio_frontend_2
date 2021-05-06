import React, { Component } from 'react';
import Post from '../Posts/Post'
import PostLink from '../Posts/PostLink'

class Posts extends Component {

  renderPosts = () => {
    return (
    this.props.posts.map(post => 
      <div>
        <Post key={post.id} post={post} deletePost={this.props.deletePost} />
        <PostLink key={post.id} />
      </div>))
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