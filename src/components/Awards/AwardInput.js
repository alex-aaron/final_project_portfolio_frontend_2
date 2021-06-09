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
          <label>Nominee 3:</label>
          <input type="text" id="nominee3"></input><br></br>
          <label>Nominee 4:</label>
          <input type="text" id="nominee4"></input><br></br>
          <label>Nominee 5:</label>
          <input type="text" id="nominee5"></input><br></br>
          <label>Winner:</label>
          <input type="text" id="winner"></input><br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default AwardInput;