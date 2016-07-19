import { browserHistory } from 'react-router'

const directors = (directors = [], action) => {
  switch (action.type) {
    case 'REMOVE_DIRECTOR':
      return directors.filter(function (director) { return director.id !== action.id })
    default:
      return directors
  }
}

export default directors
