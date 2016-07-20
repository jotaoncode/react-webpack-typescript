var React = require('react');
var DirectorsStore = require('../../stores/DirectorStore.js');

var DirectorDetail = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getDirectorsState: function (state) {
    this.setState(state);
  },
  render: function () {
    var id = this.props.params.id ? window.parseInt(this.props.params.id) : 0;
    var director = DirectorsStore.getDirector(id);
    return (
      <div className="container">
        <div className="director-detail row">
          <div className="col-md-6">
            <img src={director.image} className="image-director"/>
          </div>
          <div className="director-description col-md-6">
            <h2>Director details</h2>
            <p>{director.bio}</p>
            <ul>
              <li><span className="description">Full Name: </span><span>{director.fullName}</span></li>
              <li><span className="description">Sex: </span><span>{director.sex}</span></li>
              <li><span className="description">Nationality: </span><span>{director.nationality}</span></li>
              <li><span className="description">State: </span><span>{director.state}</span></li>
              <li><span className="description">City: </span><span>{director.city}</span></li>
              <li><span className="description">Dob: </span><span>{director.dob}</span></li>
              <li><span className="description">Age: </span><span>{director.age}</span></li>
              <li><span className="description">Spouse: </span><span>{director.spouse}</span></li>
            </ul>
          </div>
        </div>
        <div>
          <a href="#/"><span className="glyphicon glyphicon-chevron-left"></span> Back Director List</a>
        </div>
      </div>
    );
  }
});

module.exports = DirectorDetail;
