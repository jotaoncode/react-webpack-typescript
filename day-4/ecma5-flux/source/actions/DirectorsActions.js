var AppDispatcher = require('../dispatcher/AppDispatcher');
var directorsContants = require('../constants/directorConstants');

module.exports = {
  removeDirectorFromCollection: function (directorId) {
    var action = {
      type: directorsContants.DIRECTOR_REMOVE,
      directorId: directorId
    };

    AppDispatcher.dispatch(action);
  }
};
