export const GENERATE_NUMBER = 'GENERATE_NUMBER';
export const NUMBER_GENERATED = 'NUMBER_GENERATED';
export const GUESS_NUMBER_REQUEST = 'GUESS_NUMBER_REQUEST';
export const GUESS_NUMBER_RESPONSE = 'GUESS_NUMBER_RESPONSE';

export function requestGenerateNumber () {
  return {
    type: GENERATE_NUMBER,
    guessTip: 'Loading...',
    userGuess: 0
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
  return {
    type: GUESS_NUMBER_REQUEST,
    guessTip,
    userGuess
  };
}

export function guessNumberResponse (guessTip = '') {
  return {
    type: GUESS_NUMBER_RESPONSE,
    guessTip,
    userGuess: 0
  };
}
