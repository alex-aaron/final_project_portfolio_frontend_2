import React, { Component } from 'react';
import Post from '../Posts/Post';
import { Link } from 'react-router-dom';

class Comments extends Component {

  renderPosts = () => {
    return (
    this.props.posts.map(post => 
      <div>
        <Post key={post.id} post={post} deletePost={this.props.deletePost} />
        <Link to={`/posts/${post.id}`} postId={post.id}>See Post</Link>
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

export default Comments;