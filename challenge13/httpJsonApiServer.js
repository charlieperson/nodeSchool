var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  console.log(url.parse(req.url).pathname);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var date = new Date(url.parse(req.url, true).query.iso);

  if(url.parse(req.url).pathname === '/api/parsetime'){
    var json = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
    res.end(JSON.stringify(json));
  }

  if(url.parse(req.url).pathname === '/api/unixtime') {
    console.log('date', date);
    console.log(url.parse(req.url));
    res.end(JSON.stringify({unixtime: date.getTime()}));
  }
});

server.listen(process.argv[2]);
