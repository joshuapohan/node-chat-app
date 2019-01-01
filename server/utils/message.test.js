const expect = require('expect');
const request = require('supertest');

const {generateMessage} = require('./message')

describe('generate message object', () => {
	it('should generate correct message object', () => {
		var message = {
			from: 'andrew',
			text: 'testing'
		}
		var obj = generateMessage(message.from, message.text);
		expect(obj.from).toEqual(message.from);
		expect(obj.text).toEqual(message.text);
		expect(obj.createdAt).toBeA('number');
	});
});