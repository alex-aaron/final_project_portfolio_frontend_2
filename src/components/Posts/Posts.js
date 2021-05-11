import React, { Component } from 'react';
import Post from '../Posts/Post';
// import PostLink from '../Posts/PostLink'
import { Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import PostShow from '../Posts/PostShow';
// import PostShow from '../Posts/PostShow';


class Posts extends Component {

  renderPosts = () => {
    return (
    this.props.posts.map(post => 
      <div>
        <Post key={post.id} post={post} deletePost={this.props.deletePost} />
      </div>))
  }

  componentDidMount() {
    console.log("Component Mounted!");
    this.props.fetchPosts();
  }

  // componentDidUpdate(prevState, currentState) {
  //   if (prevState !== currentState) {
  //     window.
  //   }
  // }

  
  render() {
    return(
      <div>
        {this.renderPosts()}
      </div>
    );
  }
};

export default Posts;