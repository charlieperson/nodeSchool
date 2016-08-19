var http = require('http');
var url = require('url');

function unixTime(time) {
  return {unixtime: time.getTime()};
}

function parseTime(time) {
  return {
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
  };
}

var server = http.createServer(function(req, res) {
  var date = new Date(url.parse(req.url, true).query.iso);
  var result;

  if(url.parse(req.url).pathname === '/api/parsetime'){
    result = parseTime(date);
  }

  if(url.parse(req.url).pathname === '/api/unixtime') {
    result = unixTime(date);
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
