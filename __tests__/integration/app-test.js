'use strict';

jest.autoMockOff();

describe('application', function() {

	let MessageActions = require('../../messages/MessageActions');
	let MessageStore = require('../../messages/MessageStore');

	describe('a create message action is emmited', function() {

		it('should not blow up!', function(){
			MessageActions.create('Hello World!');
		})

		it('should add the message to the store', function(){
			let messages = MessageStore.getAll();
			expect(Object.keys(messages).length).toBe(1);
			console.log(messages);
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