var socket = io();
socket.on('connect', function() {
  console.log('Connected to Server');
  socket.emit('createMsg', {
    to: 'test@user.com',
    msg: 'How are you??'
  });
});

socket.on('disconnect', function() {
  console.log('DisConnected from Server');
});

socket.on('newMsg', function (msg) {
  console.log('New Message!', msg);
});