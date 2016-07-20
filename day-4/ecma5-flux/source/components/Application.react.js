var React = require('react');
var Header = require('./Header.react');
var Subtitle = require('./Subtitle.react');
var DirectorsStore = require('../stores/DirectorStore.js');
var Directors = require('./directors/DirectorsList.react');

/**
 * Retrieve current directors
 */
function getAllDirectors() {
  return {
    allDirectors: DirectorsStore.getAll()
  };
}
var Application = React.createClass({

  getInitialState: function() {
    return getAllDirectors();
  },

  componentDidMount: function() {
    DirectorsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    DirectorsStore.removeChangeListener(this._onChange);
  },
  /**
   * Event handler for 'change' events coming from the DirectorsState
   */
  _onChange: function() {
    this.setState(getAllDirectors());
  },
  render: function () {
    return (
      <div className="container-view">
        <Header />
        <Subtitle />
        <Directors directors={this.state.allDirectors}/>
      </div>
    );
  }
});

module.exports = Application;
