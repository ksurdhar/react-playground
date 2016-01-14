import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div>
        Am I working {this.props.name}!!
      </div>
    );
  }
});
