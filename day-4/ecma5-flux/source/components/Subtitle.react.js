var React = require('react');

var Subtitle = React.createClass({

  getDefaultProps: function () {
    return {
      text: 'Directors List'
    };
  },

  render: function () {
    return (
      <h2>{this.props.text}</h2>
    );
  }
});

module.exports = Subtitle;
