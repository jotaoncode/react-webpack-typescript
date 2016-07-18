import React, { PropTypes, Component } from 'react'
var Link = require('react-router').Link
import Director from './Director'
import DirectorsHeader from './DirectorsHeader'

const DirectorList = ({ directors, onDirectorClick, removeDirector}) => (
  <section>
    <table className="table">
      <DirectorsHeader />
      <tbody>
        {
          directors.map(director =>
            <Director
              key={director.id}
              {...director}
              onClick={() => onDirectorClick(director.id)}
              removeDirector= {(ev) => { ev.preventDefault(); ev.stopPropagation(); removeDirector(director.id) } }
            />
          )
        }
      </tbody>
    </table>
  </section>
)
DirectorList.propTypes = {
  directors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    dob: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    blockbuster: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDirectorClick: PropTypes.func.isRequired,
  removeDirector: PropTypes.func.isRequired
}
export default DirectorList
