import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { Application } from "./components/application";
import {About} from './components/about';

ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={Application}/>
  <Route path="/about" component={About}/>
  </Router>,
  document.getElementById("example")
);
