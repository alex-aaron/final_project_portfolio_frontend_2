import React, { Component } from 'react';
import MostCommentedPost from './MostCommentedPost'
import { Link } from 'react-router-dom';
// import PostShow from '../Posts/PostShow';
// import PostShow from '../Posts/PostShow';


class MostCommentedPosts extends Component {

    renderMostCommentedPosts = () => {
        return (
            this.props.mostCommentedPosts.map(post => <MostCommentedPost post={post} comments={post.comments} />)
        )
    }
    
    
    // renderMostCommentedPosts = () => {
    //     return (
    //         this.props.mostCommentedPosts.map(post => 
    //             <div>
    //                 <h3>{post.title}</h3>
    //                 <p>{post.content}</p>
    //             </div>
    //             )
    //     )
    // }

  render() {
    return(
      <div>
        <h2>Posts</h2>
        {this.renderMostCommentedPosts()}
      </div>
    );
  }
};

export default MostCommentedPosts;