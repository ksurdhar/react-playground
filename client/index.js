import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from '../shared/routes.js';
import reducer from '../shared/reducers/index';
import immutifyState from '../lib/immutifyState';
import promiseMiddleware from '../lib/promiseMiddleware';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

const initialState = immutifyState(window.__INITIAL_STATE__);
debugger;
const store = applyMiddleware(promiseMiddleware)(createStore)(reducer, initialState);

render(
  <Provider store={ store }>
    <Router children={ routes } history={ browserHistory } />
  </Provider>,
  document.getElementById('react-view')
);
