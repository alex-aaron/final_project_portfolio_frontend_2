import React, { Component } from 'react';

class AwardInput extends Component {

  constructor(props) {
    super() 
      this.state = {
        title: "",
        text: ""
      }
  }

  render() {
    return (
      <div>
          <form>
              <label>How many awards categories would you like to create?</label>
              <input type="text"></input>
          </form>
      </div>
    );
  }
};

export default AwardInput;