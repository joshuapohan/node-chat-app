const users = [{
	id: 1,
	name: 'John',
	schoolId: 101
},{
	id: 2,
	name: 'Jessica',
	schoolId: 999
},{
	id: 3,
	name: 'Andrew',
	schoolId: 200
}];
const grades = [{
	id: 1,
	schoolId: 101,
	grade: 86
},{
	id: 2,
	schoolId: 999,
	grade: 100
},{
	id: 3,
	schoolId: 101,
	grade: 80
}];

const getUser = (id) => {
	return new Promise((resolve, reject) => {
		const user = users.find((user)=>{
			return user.id === id;
		});
		if(user){
			resolve(user);
		} else{
			reject('No user found with id of ' + id);
		}
	});
};

const getGrades = (id) => {
	return new Promise((resolve, reject)=>{
		resolve(grades.filter((grade)=>grade.schoolId === id));
	});
};

//Student has x % in the class
const getStatus = (id) => {
	let user;
	return getUser(id).then((tempUser)=>{
		user = tempUser;
		return getGrades(user.schoolId).then((grades)=>{
			if(grades.length > 0){
				let avg = grades.map((grade)=>grade.grade).reduce((a,b)=> a+b) / grades.length;
				let status = 'Student ' + user.name + ' has ' + avg + ' in the class';
				return new Promise((resolve, reject)=>{
					resolve(status);
				});
			} else{
				return Promise.reject('No grades found for this id ' + user.schoolId);
			}
		});
	});
};

// const getStatusAlt = async (userId) => {
// 	//new error same as Promise.reject();
// 	//throw new Error('This is an error');
// 	return 'Mike';
// };

const getStatusAlt = async (userId) => {
	const user = await getUser(userId);
	const grades = await getGrades(user.schoolId);
	let avg = grades.map((grade)=>grade.grade).reduce((a,b)=>a+b) / grades.length;
	return 'Student ' + user.name + ' has ' + avg + ' in the class';
};

getStatusAlt(1).then((status)=>{
	console.log(status);
}).catch((err)=>{
	console.log(err);
});

// getUser(2).then((user)=>{
// 	console.log(user);
// }).catch((e)=>{
// 	console.log(e);
// });

// getGrades(101).then((grades)=>{
// 	console.log(grades);
// }).catch((e)=>{
// 	console.log(e);
// });

// getStatus(1).then((status)=>{
// 	console.log(status);
// }).catch((e)=>{
// 	console.log(e);
// });