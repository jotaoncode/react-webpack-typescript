/**
 * Guessing numbers
 * @module guessingNumber
 */
var guessingNumberAPI = (function () {
  "use strict";

  var guessingNumber = 0,
      lastGuessing   = 0;

  function generateNumberRandom(fromNumber, toNumber) {
    guessingNumber = Math.round((toNumber - fromNumber) * Math.random()) + fromNumber;
  }

  function gessNumber(numberUserIsGuessing) {
    var differenceToActualNumber,
        msg = '',
        differenceToLastGuess;

    if (numberUserIsGuessing === guessingNumber) {
      return 'Yout got it!';
    }

    differenceToActualNumber = Math.abs(guessingNumber - numberUserIsGuessing);
    differenceToLastGuess = Math.abs(guessingNumber - lastGuessing);

    if (differenceToLastGuess > differenceToActualNumber && differenceToActualNumber <= 5) {
      msg = 'Hot!';
    } else if (differenceToLastGuess >= differenceToActualNumber){
      msg = 'Warm!';
    } else {
      msg = 'Cold!';
    }

    lastGuessing = numberUserIsGuessing;
    return msg;
  }

  return {
    generateNumberRandom : generateNumberRandom,
    guessingNumber       : () => guessingNumber,
    guessNumber          : gessNumber
  };
})();

module.exports = guessingNumberAPI;
