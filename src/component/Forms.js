import React, { Component } from "react";

export default class Forms extends Component {
  state = {
    inputValue: "",
  };
  onHandleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  onSubmit = () => {
    console.log(this.state.inputValue);
  };

  render() {
    return (
      <div>
        <form action="">
          <h1>Form Component</h1>
          <input
            onChange={this.onHandleChange}
            value={this.state.inputValue}
            type="text"
          />
          <button type="button" onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
