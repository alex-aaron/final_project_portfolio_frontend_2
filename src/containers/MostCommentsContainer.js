
import React, { Component } from 'react';
import MostCommentedPosts from '../components/Posts/MostCommentedPosts'

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
        <MostCommentedPosts mostCommentedPosts={this.state.posts} />
      </div>
    )
  }
}

export default MostCommentsContainer;