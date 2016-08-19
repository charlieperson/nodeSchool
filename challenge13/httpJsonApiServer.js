var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var date = new Date(url.parse(req.url, true).query.iso);
  var result;

  if(url.parse(req.url).pathname === '/api/parsetime'){
    result = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
  }

  if(url.parse(req.url).pathname === '/api/unixtime') {
    result = {unixtime: date.getTime()};
  }
  if(res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(process.argv[2]);
