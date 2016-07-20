var AppDispatcher = require('../dispatcher/AppDispatcher');
var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var director = require('./director.json');
var directorConstants = require('../constants/directorConstants');
var directors = require('./directors.json');

function emitChange() {
  DirectorStore.emit('change');
}

var DirectorStore = assign({}, EventEmitter.prototype, {
  /**
   * @param {function} callback
   */
  addChangeListener: function (callback) {
    this.on('change', callback);
  },
  /**
   * @param {function} callback
   */
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  },
  /**
   * Gets a director from directors in store
   * @param {string} id
   * @returns {Object} Director
   */
  getDirector: function (id) {
    return director;
  },
  /**
   * Get all directors
   * @return {Array} Directors
   */
  getAll: function () {
    return directors;
  }
});

function setDirector(receivedDirector) {
  directors.push(receivedDirector);
}

function removeDirector(directorId) {
  directors = _.without(directors, _.find(directors, function (director) { return director.id === directorId}));
}

function handleAction(action) {
  switch (action.type) {
    case directorConstants.DIRECTOR_REMOVE:
      removeDirector(action.directorId);
      emitChange();
      break;
    default:
    //nothing
  }
}

DirectorStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = DirectorStore;
