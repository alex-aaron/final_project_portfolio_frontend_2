import React, { Component } from 'react';
import Post from '../Posts/Post';
import { Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import PostShow from '../Posts/PostShow';
// import PostShow from '../Posts/PostShow';

class Comments extends Component {

  renderPosts = () => {
    return (
    this.props.posts.map(post => 
      <div>
        <Post key={post.id} post={post} deletePost={this.props.deletePost} />
        <Link to={`/posts/${post.id}`} postId={post.id}>See Post</Link>
        {/* <PostLink key={post.id} /> */}
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
        {/* <Route path={`${match.url}/:movieId`} component={PostShow} posts={this.props.posts} /> */}
      </div>
    );
  }
};

export default Comments;