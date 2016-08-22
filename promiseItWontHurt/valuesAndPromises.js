function attachTitle(lastName) {
  return 'DR. ' + lastName;
}
var promise = new Promise(function(fulfill, reject) {
  fulfill('MANHATTAN');
});

promise.then(attachTitle)
.then(console.log);

// var promise = Promise.resolve('MAHATTAN');
