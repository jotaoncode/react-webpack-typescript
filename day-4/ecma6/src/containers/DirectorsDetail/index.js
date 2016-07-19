import React, { Component } from 'react';
import Subtitle from 'components/Subtitle';
import { Link } from 'react-router';

class DirectorsDetail extends Component {
  render() {
    var director = {
      "fullName": "David Lynch",
      "image": "http://www.interviewmagazine.com/files/2012/01/08/img-david-lynch-01-_184117216071.jpg",
      "sex": "Male",
      "nationality": "United States",
      "state": "Montana",
      "city": "Missoula",
      "dob": -755699867,
      "age": 69,
      "blockbusters": [{
        "movieName": "Blue Velvet",
        "release": "1986"
      }, {
        "movieName": "Wild at Heart",
        "release": "1990"
      }, {
        "movieName": "Mulholland Drive",
        "release": "2001"
      }],
      "bio": "is an American director, screenwriter, visual artist, musician, actor, and author. Known for his surrealist films, he has developed a unique cinematic style. The surreal and, in many cases, violent elements contained within his films have been known to 'disturb, offend or mystify' audiences.",
      "spouse": "Emily Stofle",
      "children": ["Lisa", "Bart"]
    };
    var imageDirector = {
      width: 'inherit'
    };
    return (
      <section>
        <Subtitle />
          <div className="director-detail row">
            <div className="col-md-6">
              <img src={director.image} className="image-director" style={imageDirector}/>
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
            <Link to="/"><span className="glyphicon glyphicon-chevron-left"></span> Back Director List</Link>
          </div>
      </section>
    )
  }
}

export default DirectorsDetail
