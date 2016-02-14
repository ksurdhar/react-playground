import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class MainView extends React.Component {
  render() {
    return (
      <div id="main-view">
        <h1>Todos</h1>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/subnote">Subnote</Link></li>
        <hr />

        { this.props.children }
      </div>
    );
  };
}

MainView.proptypes = {
  children: PropTypes.object
};
