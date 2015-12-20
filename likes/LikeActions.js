let AppDispatcher = require('../AppDispatcher');
let LikeConstants = require('./LikeConstants');

let LikeActions = {
	create: function(like) {
		AppDispatcher.handleViewAction({
			like,
			actionType: LikeActions.LIKE_CREATE,
		})
	}
}

module.exports = LikeActions;