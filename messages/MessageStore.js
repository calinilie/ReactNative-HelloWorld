'use strict';

var AppDispatcher = require('../AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MessageConstants = require('./MessageConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _messages = {};

/**
 * Create a message item.
 * @param  {string} text The content of the message
 */
function create(text) {
    // Hand waving here -- not showing how this interacts with XHR or persistent
    // server-side storage.
    // Using the current timestamp + random number in place of a real id.
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _messages[id] = {
        id: id,
        text: text,
    };
}

var MessageStore = assign({}, EventEmitter.prototype, {

    /**
     * Get the entire collection of messages.
     * @return {object}
     */
    getAll: function() {
        return _messages;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
});

// Register callback to handle all updates
AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.actionType) {
        case MessageConstants.MESSAGE_CREATE:
            let text = action.text.trim();
            if (text !== '') {
                create(text);
                MessageStore.emitChange();
            }

            break;

        default:

        // no op
    }
});

module.exports = MessageStore;
