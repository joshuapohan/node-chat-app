const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage}  = require('./utils/message');
const {isRealString} = require('./utils/validation');

const publicPath = path.join(__dirname,'../public');

console.log(publicPath);

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
 console.log('New user connected');

 socket.emit('newMessage', generateMessage('admin','welcome to the chat app'));

 //socket.broadcast.emit('newMessage', generateMessage('admin','new user joined'));

 socket.on('join', (params, callback) => {
 	if(!isRealString(params.name) || !isRealString(params.room)){
 		callback('Name and room name are required');
 	}
 	socket.join(params.room);
 	socket.broadcast.to(params.room).emit('newMessage', generateMessage('admin',param.user +' joined'));
 	callback();
 });

 socket.on('createMessage', (message, callback) => {
 	io.emit('newMessage', generateMessage(message.from, message.text));
 	callback();
 });

 socket.on('createLocationMessage', (coords, callback) => {
 	io.emit('newLocationMessage', generateLocationMessage('admin', coords.latitude, coords.longitude));
 });


 socket.on('disconnect', function(){
    console.log('User disconnected');
 });
});

server.listen(3000, function(){
  console.log('Server is up on port 3000');
});
