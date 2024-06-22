import React, { Component } from "react";
import "./App.css";
// import Counter from "./component/Counter";
import Forms from "./component/Forms";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Event</h1>
        {/* <Counter /> */}
        <Forms />
      </div>
    );
  }
}

export default App;
