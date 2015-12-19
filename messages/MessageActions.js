/**
 * MessageActions
 */

var AppDispatcher = require('../AppDispatcher');
var MessageConstants = require('./MessageConstants');

var MessageActions = {

  /**
   * @param  {string} text
   */
  create: function(text) {
    AppDispatcher.handleViewAction({
      actionType: MessageConstants.MESSAGE_CREATE,
      text: text
    });
  },
};

module.exports = MessageActions;