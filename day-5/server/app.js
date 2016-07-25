/*global require*/
/**
 * Module dependencies
 */

var express = require('express'),
  http = require('http'),
  bodyParser = require('body-parser'),
  path = require('path'),
  guessingNumberModel = require('./model'),
  app = module.exports = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  return next();
});


/**
 * Routes
 */
app.get('/generate', function (req, res) {
  guessingNumberModel.generateNumberRandom(0, 100);
  res.send({
    generatedNumber: guessingNumberModel.guessingNumber()
  });
});

app.get('/guess/:numberGuess', function (req, res) {
  res.send({
    guessTip: guessingNumberModel.guessNumber(parseInt(req.params.numberGuess, 10))
  });
});

/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
