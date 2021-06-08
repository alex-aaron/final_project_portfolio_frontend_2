import React, { Component } from 'react';

class AwardCategoryInputs extends Component {

  constructor(props) {
    super() 
      this.state = {
        awardCategories: 0
      }
  }

  render() {

    return (
      <div>
          <form onSubmit={this.handleOnSubmit}>
              <label>How many awards categories would you like to create?</label><br></br>
              <input type="text"></input><br></br>
              <button type="submit">Submit</button>
          </form>
      </div>
    );
  }
};

export default AwardCategoryInputs;