var mod = require('./extensionFilter');
var dir = process.argv[2];
var ext = process.argv[3];

mod(dir, ext, function(err, array) {
  if(err) return console.error(err);
  array.forEach(function(item){
    console.log(item);
  });
});
