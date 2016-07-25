import fetch from 'isomorphic-fetch';
export const GENERATE_NUMBER = 'GENERATE_NUMBER';
export const NUMBER_GENERATED = 'NUMBER_GENERATED';
export const GUESS_NUMBER_REQUEST = 'GUESS_NUMBER_REQUEST';
export const GUESS_NUMBER_RESPONSE = 'GUESS_NUMBER_RESPONSE';

function serverGenerateNumber() {
  return fetch('http://localhost:4000/generate' ).then(res => res.json());
}

function userGuessNumber(numberGuess) {
  return fetch('http://localhost:4000/guess/' + numberGuess ).then(res => res.json());
}

export function requestGenerateNumber () {
  return function (dispatch) {
    return serverGenerateNumber().then(results => dispatch(numberGenerated()));
  };
}

export function numberGenerated () {
  return {
    type: NUMBER_GENERATED,
    guessTip: "Number Generated!",
    userGuess: 0
  };
}

export function guessNumber (userGuess = 0, guessTip = '') {
  return function (dispatch) {
    return userGuessNumber(userGuess).then(results => dispatch(guessNumberResponse(results.guessTip)));
  };
}

export function guessNumberResponse (guessTip = '') {
  return {
    type: GUESS_NUMBER_RESPONSE,
    guessTip,
    userGuess: 0
  };
}
