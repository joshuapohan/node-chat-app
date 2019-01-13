const expect = require('expect');
const {Users} = require('./users');

describe('Create new user object', () => {
	it('should return a new user object', () =>{
		var users = new Users();
		var user = users.addUser(123, 'John', 'The office fans');

		expect(users).toExist();
		expect(users.users.length).toEqual(1);
		expect(users.users[0].id).toEqual(123);
		expect(users.users[0].name).toEqual('John');
		expect(users.users[0].room).toEqual('The office fans');
	});
})