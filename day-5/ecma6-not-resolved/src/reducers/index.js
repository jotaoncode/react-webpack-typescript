import { combineReducers } from 'redux';

import {
  GENERATE_NUMBER,
  GUESS_NUMBER_REQUEST,
  NUMBER_GENERATED,
  GUESS_NUMBER_RESPONSE
} from '../actions';

function rootReducer(state = { guessTip: '', userGuess: 0 }, action) {
  switch (action.type) {
    case GENERATE_NUMBER:
      return {
        guessTip: action.guessTip,
        userGuess: action.userGuess
      };
      break;
    case NUMBER_GENERATED:
      return {
        guessTip: action.guessTip,
        userGuess: action.userGuess
      };
      break;
    case GUESS_NUMBER_REQUEST:
      return {
        guessTip: action.guessTip,
        userGuess: action.userGuess
      };
      break;
    case GUESS_NUMBER_RESPONSE:
      return {
        guessTip: action.guessTip,
        userGuess: action.userGuess
      };
      break;
    default:
      return state;
  }
}

combineReducers({
  rootReducer
});

export default rootReducer;
