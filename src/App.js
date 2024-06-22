import React, { Component } from "react";
import "./App.css";
import Counter from "./component/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Event</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
