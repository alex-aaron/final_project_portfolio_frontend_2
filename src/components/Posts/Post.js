import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment'

class Post extends Component {
  
  constructor(props) {
      super()
        this.state = {
          likes: 0
        }
    }

  handleLikeOnClick = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {

    return (
      <div className="card post-container">
        <div class="card-body">
          <h5 class="card-title">{this.props.post.title}</h5>
          <hr />
          <p class="card-text">{this.props.post.text}</p>
          <Link to={`/posts/${this.props.post.id}`} postId={this.props.post.id} className="btn btn-primary">See Post</Link>
          <button onClick={this.handleLikeOnClick} className="btn btn-success">Like</button>
          <p>Likes: {this.state.likes} </p>
          <h5><span class="badge bg-secondary">Posted: <Moment format="MM/DD/YYYY, h:mm">{this.props.post.createdAt}</Moment></span></h5>
        </div>
      </div>

    );
  }
};

export default Post;
