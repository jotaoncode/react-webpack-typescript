import fetch from 'isomorphic-fetch';
import { put, call, fork, select, take } from 'redux-saga/effects';
import * as actions from '../actions';

function serverGenerateNumber() {
  return fetch('http://localhost:4000/generate' ).then(res => res.json());
}

function userGuessNumber(numberGuess) {
  return fetch('http://localhost:4000/guess/' + numberGuess ).then(res => res.json());
}

export function* generateNumber() {
  //TODO: Create a loop to be listening new actions of generating numbers
  //TODO: Take the action to generate the number
  //TODO: Make a call to generate the server new number to guess
  //TODO: Dispatch the action that our number is generated!
}

export function* initialGeneratedNumber() {
  const response = yield call(serverGenerateNumber);
  yield put(actions.numberGenerated(response));
}

export function* guessNumber() {
  while(true) {
    const { userGuess } = yield take(actions.GUESS_NUMBER_REQUEST);
    const response = yield call(userGuessNumber, userGuess);
    yield put(actions.guessNumberResponse(response.guessTip));
  }
}

export default function* root() {
  yield fork(generateNumber);
  yield fork(guessNumber);
  yield fork(initialGeneratedNumber);
}
