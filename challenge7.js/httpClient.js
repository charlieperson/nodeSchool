var http = require('http');


http.get(process.argv[2], function(resp) {
  resp.setEncoding("utf8").on('data', function(data) {
    console.log(data);
  });
});
