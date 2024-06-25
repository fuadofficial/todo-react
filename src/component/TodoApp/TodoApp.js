import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {

  state = {
    inputValue: "",
    items: []
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  storeItems = (event) => {
    event.preventDefault()
    const { inputValue } = this.state;

    this.setState({
      items: [...this.state.items, inputValue],
      inputValue: ""
    });
  };

  render() {

    const { inputValue, items } = this.state;

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>
          <input value={inputValue} onChange={this.handleChange} type="text" placeholder="Enter Items...." />
        </form>
        <ul>
          {items.map((data, index) => {
            return (
              <li key={index}>
                {data} <i className="fa-solid fa-trash-can"></i>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
