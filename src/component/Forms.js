import React, { Component } from "react";

export default class Forms extends Component {
  state = {
    firstName: "",
    lastName: "",
  };
  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form action="">
          <h1>Form Component</h1>
          <input
            value={this.state.firstName}
            onChange={this.onHandleChange}
            name="firstName"
            type="text"
          />
          <input
            value={this.state.lastName}
            onChange={this.onHandleChange}
            name="lastName"
            type="text"
          />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}


// completed form project