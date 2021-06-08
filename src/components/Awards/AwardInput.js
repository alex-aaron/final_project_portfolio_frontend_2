import React, { Component } from 'react';

class AwardInput extends Component {

  constructor(props) {
    super() 
      this.state = {
        award: {
          year: "",
          category: "",
          nominees: {
            nominee1: "",
            nominee2: "",
            nominee3: "",
            nominee4: "",
            nominee5: ""
          },
          winner: ""
        }
      }
  }

handleOnSubmit = event => {
  this.setState({
    awardCategories: event.target.value
  })
}

  render() {

    return (
      <div>
        <form onYearSubmit={this.handleYearSubmit}>
          <label>Year: </label>
          <input type="text"></input>
          <button type="submit">Submit</button>
        </form>

        <form onCategorySubmit={this.handleOnCategorySubmit}>
            <label>Category Name:</label>
            <input type="text"></input><br></br>
            <label>Nominee 1:</label>
            <input type="text"></input><br></br>
            <label>Nominee 2:</label>
            <input type="text"></input><br></br>
            <label>Nominee 3:</label>
            <input type="text"></input><br></br>
            <label>Nominee 4:</label>
            <input type="text"></input><br></br>
            <label>Nominee 5:</label>
            <input type="text"></input><br></br>
            <label>Nominee 5:</label>
            <input type="text"></input><br></br>
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default AwardInput;