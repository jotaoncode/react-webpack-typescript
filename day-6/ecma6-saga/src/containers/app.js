import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { requestGenerateNumber, guessNumber } from '../actions'
import Header from './header.js';

class App extends Component {
  handleGuess() {
    this.props.dispatch(guessNumber(parseInt(this.refs.numberGuess.value, 10)));
  }
  handleNumberGenerate() {
    this.props.dispatch(requestGenerateNumber());
  }
  render() {
    return (
      <div className="centered-content">
        <Header/>
        <input type="number" ref="numberGuess"/>
        <button onClick={this.handleGuess.bind(this)}>Guess</button>
        <button onClick={this.handleNumberGenerate.bind(this)}>Generate Number</button>
        <p>{this.props.guessTip}</p>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  guessTip: PropTypes.string.isRequired,
  userGuess: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    guessTip: state.guessTip,
    userGuess: state.userGuess
  };
}

export default connect(mapStateToProps)(App)
