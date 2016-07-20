var React = require('react');
var DirectorsActions = require('../../actions/DirectorsActions');

var Director = React.createClass({

  onRowClick: function () {
    var director = this.props.director;
    var onDirectorClick = this.props.onDirectorClick;

    if (onDirectorClick) {
      onDirectorClick(director.id);
    }
  },
  removeDirector: function () {
    DirectorsActions.removeDirectorFromCollection(this.props.director.id);
  },
  render: function () {
    return (
      <tr>
        <td onClick={this.onRowClick} className="director-attr">{this.props.director.name}</td>
        <td onClick={this.onRowClick} className="director-attr">{this.props.director.sex}</td>
        <td onClick={this.onRowClick} className="director-attr">{this.props.director.nationality}</td>
        <td onClick={this.onRowClick} className="director-attr">{this.props.director.city}</td>
        <td onClick={this.onRowClick} className="director-attr">{this.props.director.dob}</td>
        <td onClick={this.onRowClick} className="director-attr">{this.props.director.age}</td>
        <td onClick={this.onRowClick} className="director-attr">{this.props.director.blockbuster}</td>
        <td className="director-attr"><button onClick={this.removeDirector}><span className="glyphicon glyphicon-trash"></span></button></td>
      </tr>
    );
  }
});

module.exports = Director;
