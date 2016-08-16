var mod = require('./makeItModular');



mod(process.argv[2], process.argv[3], function(err, array) {
  if(err) {
    throw err;
  } else {
    array.forEach(function(item){
      console.log(item);
    });
  }
});
