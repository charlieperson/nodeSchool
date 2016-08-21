var promise = Promise.reject(new Error('this is an error that will be caught'));

promise.catch(function(error){console.log(error.message);});
