import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
// import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from '../shared/routes.js';
import * as reducers from '../shared/reducers/index';
import immutifyState from '../lib/immutifyState';
import promiseMiddleware from '../lib/promiseMiddleware';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import Hello from './Hello';

const initialState = immutifyState(window.__INITIAL_STATE__);
const reducer = combineReducers(reducers);
const store   = applyMiddleware(promiseMiddleware)(createStore)(reducer, initialState);

render(
  <Provider store={ store }>
    <Router children={ routes } history={ browserHistory } />
  </Provider>,
  document.getElementById('react-view')
);
