import React, { Component } from "react";
import "./App.css";
// import Counter from "./component/Counter";
// import Forms from "./component/Forms";
import List from "./component/List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>List</h1>
        {/* <Counter /> */}
        {/* <Forms /> */}
        <List />
      </div>
    );
  }
}

export default App;
