function all(prom1, prom2) {
  var counter = 0;
  var arr = [];
  return new Promise(function(fulfill, reject){
    prom1.then(function(result) {
      arr[0] = result;
      counter += 1;
      if(counter === 2) fulfill(arr);
    });
    prom2.then(function(result) {
      arr[1] = result;
      counter += 1;
      if(counter === 2) fulfill(arr);
    });
  });
}

all(getPromise1(), getPromise2())
.then(console.log);
