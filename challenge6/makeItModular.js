var fs = require('fs');
var path = require('path');

module.exports = function(folder, extension, callback){
  fs.readdir(folder, function(err, list) {
    var array = [];
    if(err) {
      return callback(err);
    } else {
      list.forEach(function(item) {
        if(path.extname(item) === '.' + extension) array.push(item);
      });
    }
    callback(null, array);
  });
};
