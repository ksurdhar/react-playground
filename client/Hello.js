// import { Component } from "react";
import React from "react";

// export default class Hello extends Component {
export default React.createClass({
  render() {
    return (
      <div>
        holy shit, {this.props.name}!!
      </div>
    );
  }
});
// };
