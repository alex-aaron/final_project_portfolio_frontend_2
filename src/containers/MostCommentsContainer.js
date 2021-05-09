
import React, { Component } from 'react';
import MostCommentedPosts from '../components/Posts/MostCommentedPosts'
// import { connect } from 'react-redux'
// import fetchPosts from '../actions/fetchPosts'

class MostCommentsContainer extends Component {

    constructor(props) {
        super() 
          this.state = {
              posts: []
          }
      }

      componentDidMount() {
          this.getMostCommentedPosts();
      }

      getMostCommentedPosts = () => {
          fetch("http://localhost:3001/most_comments")
            .then(response => response.json())
            .then(fetchedPosts => {
                this.setState({
                    posts: fetchedPosts
                })
            })
      }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Most Commented Posts Go Here</h1>
        <MostCommentedPosts mostCommentedPosts={this.state.posts} />
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return { posts: state.posts }
// }

// const mapDispatchToProps = dispatch => ({
//   addPost: post => dispatch({ type: "ADD_POST", post}),
//   deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id}),
//   fetchPosts: () => dispatch(fetchPosts())
// })

export default MostCommentsContainer;