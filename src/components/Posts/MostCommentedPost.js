import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MostCommentedPost extends Component {

  renderComments = () => {
    return (
        this.props.comments.map(comment => 
            <div>
                <p>{comment.content}</p>
            </div>
            )
    )
  }

  render() {

    return (
      <div id={this.props.post.id}>
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.text}</p>
        <Link to={`/posts/${this.props.post.id}`} postId={this.props.post.id}>See Post</Link>
        {this.renderComments()}
      </div>
    );
  }
};

export default MostCommentedPost;
