import React, { Component } from 'react';
// import Posts from '../Posts/Posts';
import { connect } from 'react-redux'
import CommentInput from '../Comments/CommentInput'
// import fetchPosts from '.../actions/fetchPosts'
import Comment from '../Comments/Comment'

class CommentContainer extends Component {
  renderComments = () => {
    return (
      this.props.comments.map(comment => 
        <Comment comment={comment} postId={this.props.postId} />
        )
    )
  }

  render() {
    return (
      <div>
        <CommentInput postId={this.props.postId} addComment={this.props.addComment} />
        <h3>Comments</h3>
        {this.renderComments()}
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch({ type: "ADD_POST", post}),
  addComment: comment => dispatch({type: "ADD_COMMENT", comment}),
})


export default connect(null, mapDispatchToProps)(CommentContainer);