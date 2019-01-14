const expect = require('expect');
const {Users} = require('./users');

describe('Create new user object', () => {
	var users;

	beforeEach(()=>{
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Mike',
			room: 'Node Course'
		},{
			id: '2',
			name: 'Jen',
			room: 'React Course'
		},{
			id: '3',
			name: 'Julie',
			room: 'Node Course'
		}]
	});

	it('should return a new user object', () =>{
		var users = new Users();
		var user = users.addUser(123, 'John', 'The office fans');

		expect(users).toExist();
		expect(users.users.length).toEqual(1);
		expect(users.users[0].id).toEqual(123);
		expect(users.users[0].name).toEqual('John');
		expect(users.users[0].room).toEqual('The office fans');
	});

	it('should remove a user', ()=>{
		var user = users.removeUser('2');

		expect(users.users.length).toEqual(2);
		expect(user.id).toEqual('2');
	});

	it('should not remove a user', ()=>{
		var user = users.removeUser('5');

		expect(users.users.length).toEqual(3);
		expect(user).toNotExist();
	});

	it('should find a user', ()=>{
		var user = users.getUser('1');

		expect(user).toExist();
		expect(user).toEqual(users.users[0]);
	});

	it('should not find a user', ()=>{
		var user = users.getUser('5');

		expect(user).toNotExist();
	});

	it('should return names for node course', ()=>{
		var userList = users.getUserList('Node Course');
		expect(userList.length).toEqual(2);
		expect(userList).toEqual(['Mike','Julie']);
	});

	it('should return names for react course', ()=>{
		var userList = users.getUserList('React Course');
		expect(userList.length).toEqual(1);
		expect(userList).toEqual(['Jen']);
	});
})