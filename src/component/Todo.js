import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <h1>Todo Component</h1>
        <h3>{this.props.send}</h3>
      </div>
    );
  }
}
