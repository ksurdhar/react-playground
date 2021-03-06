import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/index.js';
import Home from './components/Home';
import SubnoteView from './components/SubnoteView';

export default (
  <Route path="/" component={ App }>
    <Route path="subnote" component={ SubnoteView } />
    <IndexRoute component={ Home }/>
  </Route>
);
