import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class PostLink extends Component {

  render() {
    return (
      <NavLink to={`posts/${this.props.key}`}>
          See post
      </NavLink>
    );
  }
};

export default PostLink;