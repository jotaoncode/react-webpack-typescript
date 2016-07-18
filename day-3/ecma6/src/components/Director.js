import React, { PropTypes, Component } from 'react'
/* component styles */
import { styles } from './Director.scss';

const Director = ({ onClick, removeDirector, id, name, sex, nationality, city, dob, age, blockbuster }) => {
  return (
    <tr onClick={onClick} className={styles}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{sex}</td>
      <td>{nationality}</td>
      <td>{city}</td>
      <td>{dob}</td>
      <td>{age}</td>
      <td>{blockbuster}</td>
      <td><span className="glyphicon glyphicon-remove" onClick={ removeDirector }></span></td>
    </tr>
  )
}

export default Director
