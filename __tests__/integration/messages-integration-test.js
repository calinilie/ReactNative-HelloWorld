'use strict';

jest.autoMockOff();

describe('when', function() {

	let MessageActions = require('../../messages/MessageActions');
	let MessageStore = require('../../messages/MessageStore');

	describe('a message is created', function() {

		it('should not blow up!', function(){
			MessageActions.create('Hello World!');
		})

		it('should add the message to the store', function(){
			let messages = MessageStore.getAll();
			expect(Object.keys(messages).length).toBe(1);
		})

		describe('with an empty text', function(){

			it('should ignore the message', function(){

				MessageActions.create(' ');
				let messages = MessageStore.getAll();
				expect(Object.keys(messages).length).toBe(1);

			})
		})
	})
})