var React = require('react');
var Director = require('./Director.react.js');
var CollectionActionCreators = require('../../actions/DirectorsActions.js');

var DirectorList = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getListOfDirectorsIds: function () {
    return Object.keys(this.props.directors || []);
  },
  goToDirectorDetail: function (directorId) {
    this.context.router.push('/director/' + directorId);
  },
  getDirectorElement: function (directorId) {
    var director = this.props.directors[directorId];
    var directorElement;

    directorElement = (
      <Director director={director} key={director.id} onDirectorClick={this.goToDirectorDetail}/>
    );

    return directorElement;
  },

  render: function () {
    var directorsElements = this.getListOfDirectorsIds().map(this.getDirectorElement);

    return (
      <table className="table-directors">
        <thead className="table-header">
          <tr>
            <th>Name</th>
            <th>Sex</th>
            <th>Nationality</th>
            <th>City</th>
            <th>dob</th>
            <th>age</th>
            <th>blockbuster</th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
          {directorsElements}
        </tbody>
      </table>
    );
  }
});
module.exports = DirectorList;
