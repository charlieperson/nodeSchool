var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(resp) {
  resp.pipe(bl(function(err, data) {
    if(err) return console.error(err);
    console.log(data.length);
    console.log(data.toString());
  }));
});
