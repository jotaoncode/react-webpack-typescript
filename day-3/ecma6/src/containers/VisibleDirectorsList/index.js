import { connect } from 'react-redux'
import { removeDirector } from 'actions'
import { browserHistory } from 'react-router';
import React from 'react';
import DirectorsList from 'components/Directors'

//Will be a filter, and this is all the directors
const getDirectors = (directors) => {
  return directors;
}

const mapStateToProps = (state) => {
  return {
    directors: getDirectors(state.directors)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDirectorClick: (id) => {
      browserHistory.push('director/' + id);
    },
    removeDirector: (id) => {
      let state = removeDirector(id);
      dispatch(state)
    }
  }
}

const VisibleDirectorsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectorsList)

export default VisibleDirectorsList
