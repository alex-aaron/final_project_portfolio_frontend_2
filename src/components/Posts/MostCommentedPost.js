import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment'

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

      <div className="card post-container">
        <div className="card-body">
          <h5 className="most-commented-title" className="card-title">{this.props.post.title}</h5>
          <hr />
          <p className="card-text">{this.props.post.content}</p>
          <div className="row">
            <div className="col-sm-12" >
            <Link to={`/posts/${this.props.post.id}`} postId={this.props.post.id} className="btn btn-primary page-button">{this.props.comments.length} COMMENTS - See Post</Link>
            </div>
          </div>
        </div>
      </div>

    );
  }
};

export default MostCommentedPost;
