import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import app from 'containers/app'

export default (
  <Route path="*" component={app} >
  </Route>
);
