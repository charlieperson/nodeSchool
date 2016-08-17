var net = require('net');
var strftime = require('strftime');

function getTime() {
  return strftime('%F %R', new Date());
}

var server = net.createServer(function(socket) {
  socket.end(getTime() + '\n');
});

server.listen(process.argv[2]);
