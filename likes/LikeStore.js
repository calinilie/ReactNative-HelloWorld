'use strict';

let assign = require('object-assign');
let EventEmitter = require('events').EventEmitter; 

let AppDispatcher = require('../AppDispatcher');
let LikeConstants = require('./LikeConstants');

let _likes = {};

function create(like) {

	//TODO like id

	if (!_likes[like.parentId]){
		_likes[like.parentId]=[];
	}
	
	_likes[like.parentId].push(like);
}

let LikeStore = assign({}, EventEmitter.prototype, {

	getLikesForParent: function(parentId){
		return _likes[parentId];
	}

});

AppDispatcher.register(function(payload){
	let action = payload.action;
	let like  = action.like;
	switch (action.actionType){
		case LikeConstants.LIKE_CREATE:
			if (like && like.parentId && like.profileId){
				create(like);
			}
			break;	
		default:
			break;
	}
});

module.exports = LikeStore;
