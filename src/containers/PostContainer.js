import React, { Component } from 'react';
import Posts from '../components/Posts/Posts';
import { connect } from 'react-redux'

class PostContainer extends Component {

  render() {
    return (
      <div>
        <h2>Sample text</h2>
        <Posts posts={this.props.posts} deletePost={this.props.deletePost} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { posts: state.posts }
}

const mapDispatchToProps = dispatch => ({
  addPost: text => dispatch({ type: "ADD_POST", text}),
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);