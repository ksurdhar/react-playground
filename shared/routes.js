import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/index.js';
import Home from './components/Home';
import SubnoteView from './components/SubnoteView';

// the reason these aren't rendering when we refresh the page is because
// we bypass the react router and express is confused. Read below for solution
// http://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually

export default (
  <Route path="/" component={ App }>
    <Route path="subnote" component={ SubnoteView } />
    <IndexRoute component={ Home }/>
  </Route>
);
