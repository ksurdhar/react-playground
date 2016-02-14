import React, { Component } from "react";

export default class Hello extends Component {
  constructor(){
    super();
  }

  testHandler = (testArg) => {
    console.log('testing, 123');
  };

  render() {
    this.testHandler();
    return (
      <div>
        Welcome, { this.props.name }.
      </div>
    );
  }
};
