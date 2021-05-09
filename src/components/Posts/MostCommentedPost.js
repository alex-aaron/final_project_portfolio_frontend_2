import React, { Component } from 'react';

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
        {this.renderComments()}
      </div>
    );
  }
};

export default MostCommentedPost;
