import React, { Component } from 'react';
import MostCommentedPost from './MostCommentedPost'
import { Link } from 'react-router-dom';

class MostCommentedPosts extends Component {

  renderMostCommentedPosts = () => {
      return (
          this.props.mostCommentedPosts.map(post => <MostCommentedPost post={post} comments={post.comments} />)
      )
    }

  render() {
    return(
      <div>
        <h1 className="most-comments-header">Most Commented Posts</h1>
        {this.renderMostCommentedPosts()}
      </div>
    );
  }
};

export default MostCommentedPosts;