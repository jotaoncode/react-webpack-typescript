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
}
