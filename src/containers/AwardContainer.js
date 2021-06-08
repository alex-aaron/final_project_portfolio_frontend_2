import React, { Component } from 'react';
import AwardInput from '../components/Awards/AwardInput'
import 'bootstrap/dist/css/bootstrap.min.css'


class AwardContainer extends Component {

  render() {
    return (
      <div>
          <h1>Award Container Component</h1>
          <AwardInput />
          
      </div>
    )
  }
}


export default AwardContainer;