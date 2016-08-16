var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function(err, list){
  if(err) return console.log(err);
  list.forEach(function(item) {
    if(path.extname(item) === ext) console.log(item);
  });
});
