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

    if (inputValue === "") {
      alert('Please Enter Any Values...')
    } else {
      this.setState({
        items: [...this.state.items, inputValue],
        inputValue: ""
      });
    }
  };

  deletItem = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key)
    })
  }

  changeValue = (data, index) => {
    this.setState({
      inputValue: data
    }, () => {
      this.inputRef.focus()
    },)
  }

  render() {

    const { inputValue, items } = this.state;

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>
          <input ref={(input) => { this.inputRef = input; }} value={inputValue} onChange={this.handleChange} type="text" placeholder="Enter Items...." />
        </form>
        <ul>
          {items.map((data, index) => {
            return (
              <li key={index}>
                <span>{data}</span>
                <i onClick={() => this.changeValue(data, index)} className="fa-regular fa-pen-to-square icons"></i>
                <i onClick={() => this.deletItem(index)} className="fa-solid fa-trash-can icons"></i>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
