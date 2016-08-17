var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
  console.log('connection');
  socket.write(strftime('%F %R', new Date()) + '\n');
  socket.end();
});

server.listen(process.argv[2]);
