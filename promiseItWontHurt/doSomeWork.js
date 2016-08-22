var http = require('q-io/http');

http.read('http://localhost:7000')
.then(function(id){
  return http.read('http://localhost:7001/' + id.toString());
})
.then(function(userLogin){
  console.log(JSON.parse(userLogin));
})
.catch(null, console.log)
.done();
