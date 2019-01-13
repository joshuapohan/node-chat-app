[{
	id: 'asdadsasdsadasdasdas',
	name: 'John',
	room: 'The office fans'
}]

// addUser (id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
	constructor(){
		this.users = [];
	}

	addUser (id, name, room){
		var user = {id, name, room};
		this.users.push(user);
		return user;
	}
}

// class Person {
// 	constructor(name, age){
// 		this.name = name;
// 		this.age = age;
// 	}
// }

module.exports = {
	Users
};

