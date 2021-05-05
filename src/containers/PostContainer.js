import React, { Component } from 'react';
import Posts from '../components/Posts/Posts';
import { connect } from 'react-redux'
import PostInput from '../components/Posts/PostInput'
import fetchPosts from '../actions/fetchPosts'

class PostContainer extends Component {

  render() {
    return (
      <div>
        <h1>Posts Go Here</h1>
        <PostInput addPost={this.props.addPost} />
        <Posts posts={this.props.posts} fetchPosts={this.props.fetchPosts} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { posts: state.posts }
}

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch({ type: "ADD_POST", post}),
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id}),
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);