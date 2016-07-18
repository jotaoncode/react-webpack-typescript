import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, browserHistory } from 'react-router';
import directorsApp from './reducers'
import {directorsDataList} from './mocks/directorsDataList'
import routes from './routes';

let store = createStore(directorsApp, directorsDataList)

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
