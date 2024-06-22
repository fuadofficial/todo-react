import React, { Component } from "react";
import "./App.css";
import Todo from "./component/Todo";

class App extends Component {
  state = {
    string: "fuad",
  };

  handleChange=()=>{
    this.setState({
      string:'ahmad fuad '
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome {this.state.string}</h1>
        <Todo send={this.state.string} />
        <button onClick={this.handleChange}>Change Value</button>
      </div>
    );
  }
}

export default App;
