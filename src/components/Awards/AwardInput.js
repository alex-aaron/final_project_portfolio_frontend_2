import React, { Component } from 'react';

class AwardInput extends Component {

  constructor(props) {
    super() 
      this.state = {
        award: {
          category: "",
          nominee1: "",
          nominee2: "",
          nominee3: "",
          nominee4: "",
          nominee5: "",
          winner: ""
        }
      }
  }

handleOnSubmit = event => {
  console.log(this.state)
}

  render() {

    return (
      <div>
        <form onYearSubmit={this.handleYearSubmit}>
          <label>Category Name: </label>
          <input type="text" id="category" onChange={this.handleOnChange}></input><br></br>
          <label>Nominee 1:</label>
          <input type="text" id="nominee1"></input><br></br>
          <label>Nominee 2:</label>
          <input type="text" id="nominee2"></input><br></br>
        </form>
      </div>
    );
  }
};

export default AwardInput;