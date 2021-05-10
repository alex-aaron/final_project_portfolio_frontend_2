import React, { Component } from 'react';
import Post from '../Posts/Post';
import CommentContainer from '../Posts/CommentContainer'

class PostShow extends Component {

  constructor(props) {
    super() 
      this.state = {
        post: {
          id: "",
          title: "",
          text: "",
          createdAt: "",
          updatedAt: ""
        },
        comments: []
      }
  }

  componentDidMount() {
    let postId = this.props.location.pathname.split("/")[2];
    this.getPosts(postId);
  }

  getPosts = id => {
    console.log(`http://localhost:3001/posts/${id}`)
    fetch(`http://localhost:3001/posts/${id}`)
      .then(response => response.json())
      .then(fetchedPost => {
        this.setState({
        post: {
          id: fetchedPost.id,
          title: fetchedPost.title,
          text: fetchedPost.content,
          createdAt: fetchedPost.created_at,
          updatedAt: fetchedPost.updated_at
        },
        comments: fetchedPost.comments
      })});
  };

  renderPost = state => (
    <Post post={this.state.post} />
  )

  render() {
    console.log(this.state.comments)
    return (
      <div>
          <h1>View Post</h1>
          {this.renderPost(this.state.post)}
          <br></br>
          <CommentContainer comments={this.state.comments} postId={parseInt(this.props.location.pathname.split("/")[2])} />
      </div>
    );
  }
};

export default PostShow;