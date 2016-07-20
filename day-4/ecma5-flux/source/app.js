var React = require('react');
var ReactDOM = require('react-dom');

var Application = require('./components/Application.react');
var Details = require('./components/directorDetail/Details.react');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Application}/>
    <Route path="/director/:id" component={Details}/>
  </Router>
), document.getElementById('react-application'));
