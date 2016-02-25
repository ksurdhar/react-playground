import express                   from 'express';
import React                     from 'react';
import { renderToString }        from 'react-dom/server'
import { RouterContext, match }  from 'react-router';
import createLocation            from 'history/lib/createLocation';
import routes                    from 'routes';
import { Provider }              from 'react-redux';
import * as reducers             from 'reducers';
import promiseMiddleware         from './lib/promiseMiddleware';
import fetchComponentData        from './lib/fetchComponentData';
import { createStore,
         combineReducers,
         applyMiddleware }       from 'redux';
import path                      from 'path';
import bodyParser                from 'body-parser';


var app = express();

if (process.env.NODE_ENV !== 'production') {
  require('./webpack.dev').default(app);
}

app.use(express.static(path.join(__dirname, 'dist')));
// app.use('/', express.static(path.join(__dirname, "/dist")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var userRoutes = require('./api/user-routes.js');
app.use(userRoutes);

app.use( (req, res) => {
  var location = createLocation(req.url);
  var reducer = combineReducers(reducers);
  var store = applyMiddleware(promiseMiddleware)(createStore)(reducer);
  var store = createStore(reducer, {});

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if(err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if(!renderProps)
      return res.status(404).end('Not found');

    function renderView() {
      var InitialView = (
        <Provider store={ store }>
          <RouterContext { ...renderProps } />
        </Provider>
      );

      const initialState = store.getState();
      var componentHTML = renderToString(InitialView);

      var HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Isomorphic Kindling, Bitch</title>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          </script>
        </head>
        <body>
          MAYBE YOU JUST NEVER MADE SOMETHING COMPELLING
          <div id="react-view">${componentHTML}</div>
          <script src="./bundle.js"></script>
        </body>
      </html>
      `;

      return HTML;
    }

    //we aren't fetching data yet. just render the view!
    fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
      .then(renderView)
      .then(html => res.end(html))
      .catch(err => res.end(err.message));

    // var html = renderView();
    // res.end(html);
  });
});

export default app;
