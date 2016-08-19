var http = require('http');
var bl = require('bl');
var count = 0;
var results = [];

function printResults() {
  for(var i=0; i<results.length; i++) {
    console.log(results[i].toString());
  }
}

function getIt(i) {
  http.get(process.argv[2 + i], function(resp) {
    resp.pipe(bl(function(err, data)  {
      if(err) return console.log(err);
      results[i] = data;
      count++;
      console.log(count, 'ok');
      if(count === 3) printResults();
    }));
  });
}

for(var i=0; i<3; i++) {
  getIt(i);
}
