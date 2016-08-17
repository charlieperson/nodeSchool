var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(resp) {
  resp.pipe(bl(function(err, data)  {
    console.log(data.toString());
    http.get(process.argv[3], function(resp2) {
      resp2.pipe(bl(function(err2, data2) {
        console.log(data2.toString());
        http.get(process.argv[4], function(resp3) {
          resp3.pipe(bl(function(err3, data3) {
            console.log(data3.toString());
          }));
        });
      }));
    });
  }));
});
