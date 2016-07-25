import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers';
import thunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

let store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
