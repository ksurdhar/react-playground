import React, { PropTypes } from 'react';

export default class MainView extends React.Component {
  render() {
    return (
      <div id="main-view">
        <h1>Todos</h1>

        <hr />

        {this.props.children}
      </div>
    );
  };
}

MainView.proptypes = {
  children: PropTypes.object
};
