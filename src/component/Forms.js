import React, { Component } from "react";

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.inputOne = React.createRef()
    this.inputTwo = React.createRef()
  }

  onSubmit = (event) => {
    console.log(this.inputOne.value);
    console.log(this.inputTwo.value);
  };

  render() {
    return (
      <div>
        <form action="">
          <h1>Form Component</h1>
          <input ref={input => this.inputOne = input} name="firstName" type="text" />
          <input ref={input => this.inputTwo = input} name="lastName" type="text" />
          <button type="button" onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

// completed form project
