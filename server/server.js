const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');

console.log(publicPath);

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
 console.log('New user connected');

 socket.emit('newEmail', {
   from: 'andrew@example.com',
   text: 'test'
 });

 socket.on('disconnect', function(){
    console.log('User disconnected');
 });
});

server.listen(3000, function(){
  console.log('Server is up on port 3000');
});
