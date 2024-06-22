import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  onDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h2> Counter Component</h2>
        <h1>{this.state.counter}</h1>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}
