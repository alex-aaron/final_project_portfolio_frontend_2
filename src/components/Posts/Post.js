import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Moment from 'react-moment'

class Post extends Component {
  

  render() {

    return (
      <div className="card">
        <div class="card-body">
          <h5 class="card-title">{this.props.post.title}</h5>
          <p class="card-text">{this.props.post.text}</p>
          <Link to={`/posts/${this.props.post.id}`} postId={this.props.post.id} className="btn btn-primary">See Post</Link>
          <h5><span class="badge bg-secondary">Posted: <Moment format="MM/DD/YYYY, h:mm">{this.props.post.createdAt}</Moment></span></h5>
        </div>
      </div>




      // <div id={this.props.post.id}>
      //   <h3>{this.props.post.title}</h3>
      //   <p>{this.props.post.text}</p>
      // </div>
    );
  }
};

export default Post;
