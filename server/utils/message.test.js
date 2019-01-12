const expect = require('expect');
const request = require('supertest');

const {generateMessage, generateLocationMessage} = require('./message')

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

describe('generate location message', () => {
	it('shodeuld generate correct location object', () => {
		var message = {
			from: 'admin',
			latitude: 15,
			longitude: 12
		}
		url = 'https://www.google.com/maps?q=' + message.latitude + ',' + message.longitude;

		var obj = generateLocationMessage(message.from, message.latitude, message.longitude);
		expect(obj.from).toEqual(message.from);
		expect(obj.url).toEqual(url);
		expect(obj.createdAt).toBeA('number');
	});
});