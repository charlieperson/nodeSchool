var http = require('http');

var server = http.createServer(function(req, res) {
  var buffers = [];
  req.on('data', function(data) {
    buffers.push(data);
  });
  req.on('end', function() {
    var buffer = Buffer.concat(buffers);
    res.write(buffer.toString().toUpperCase());
  });
});

server.listen(process.argv[2], function() {
  console.log('connect to port');
});
