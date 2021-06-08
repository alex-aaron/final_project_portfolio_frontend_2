import React, { Component } from 'react';
import AwardCategoryInputs from '/AwardCategoryInputs'

class AwardInput extends Component {

  constructor(props) {
    super() 
      this.state = {
        awardCategories: 0
      }
  }

handleOnSubmit = event => {
  this.setState({
    awardCategories: event.target.value
  })
}

  render() {

    let awardCategoryInputs;

    if (this.state.awardCategories > 0) {
      awardCategoryInputs = <AwardCategoryInputs awardCategories={this.state.awardCategories} />
    }

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

export default AwardInput;