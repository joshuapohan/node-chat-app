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

	removeUser(id){
		var user = this.getUser(id);

		this.users = this.users.filter((user)=>{
			return user.id !== id;
		}); 

		
		if(user){
			return user;
		}
	}

	getUser(id){
		var users = this.users.filter((user)=>{
			return user.id === id;
		});
		return users[0];
	}

	getUserList(room){
		var users = this.users.filter((user)=>{
			return user.room === room;
		});
		var namesArray = users.map((user)=>{
			return user.name;
		});
		return namesArray;
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

