import { browserHistory } from 'react-router'

const director = (action) => {
  switch (action.type) {
    case 'REMOVE_DIRECTOR':
      return {
        id: action.id,
        name: action.name,
        sex: action.sex,
        nationality: action.nationality,
        city: action.city,
        dob: action.dob,
        age: action.age,
        blockbuster: action.blockbuster
      }
    default:
      return state
  }
}

const directors = (directors = [], action) => {
  switch (action.type) {
    case 'REMOVE_DIRECTOR':
      return directors.filter(function (director) { return director.id !== action.id })
    default:
      return directors
  }
}

export default directors
