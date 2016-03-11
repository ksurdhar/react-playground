import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import { bindActionCreators } from 'redux';
import * as SubnoteActions from '../actions/SubnoteActions';
import { connect } from 'react-redux';

@connect(state => ({ subnotes: state.subnotes }))
export default class SubnoteView extends React.Component {
  static needs = [
    SubnoteActions.getSubnotes
  ];

  static propTypes = {
    subnotes: PropTypes.instanceOf(Immutable.List).isRequired
  };

  render() {
    const { subnotes, dispatch } = this.props;
    console.log('SUBNOTES:' subnotes);
    //dispatch is only in here to fire off other actions

    return (
      <div id="sub-note-view">
        <span>Subnotes Below</span>
        <div id="subnote-list">
          {
            this.props.subnotes.map(function (subnote, index) {
              return (<span key={ index }>{ subnote.get('content') }</span>);
            }.bind(this))
          }
        </div>
      </div>
    );
  };
}
