first().then(function(secretVal){
  return second(secretVal);
}).then(console.log);
