'use strict';

jest.autoMockOff();

let LikeActions = require('../../likes/LikeActions');
let LikeStore = require('../../likes/LikeStore');

describe('when', function(){

	describe('a like is created', function(){
		let parentId = 'a_parent_Id';
		let profileId = 'a_profile_id';

		it('should not blow up!', function(){

			LikeActions.create({
				parentId,
				profileId,
			})

		})

		it('should add the action to the store', function(){

			let likes = LikeStore.getLikesForParent(parentId);
			expect(likes.length).toBe(1);

		})

	})

})