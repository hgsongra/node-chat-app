const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 4000;
const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
  console.log('User connected!!');

  socket.emit('newMsg', {
    from: 'test@user.com',
    msg: 'Hello!',
    createdAt: new Date()
  });

  socket.on('disconnect', () => {
    console.log('User Disconneted!!');
  });

  socket.on('createMsg', (msg) => {
    console.log('Create Msg!', msg);
  });

});

server.listen(port, ()=>{
  console.log('Server started at Port: ', port);
});