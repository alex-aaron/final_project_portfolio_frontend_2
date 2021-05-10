import React, { Component } from 'react';
import Moment from 'react-moment'
// import ReviewsContainer from '../../containers/ReviewsContainer';

class Post extends Component {


  render() {

    return (
  
      <div className="card bg-dark comment-container">
        <div class="card-body">
          <p class="card-text comment-text">{this.props.comment.content}</p>
          <h5><span class="badge bg-secondary">Posted: <Moment format="MM/DD/YYYY, h:mm">{this.props.comment.created_at}</Moment></span></h5>
        </div>
      </div>
    );
  }
};

export default Post;
