import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import App from 'containers/App'
import DirectorsDetail from 'containers/DirectorsDetail'
import VisibleDirectorsList from 'containers/VisibleDirectorsList'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={VisibleDirectorsList} />
    <Route path="director/:id" component={DirectorsDetail} />
  </Route>
);
