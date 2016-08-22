function attachTitle(lastName) {
  return 'DR. ' + lastName;
}

Promise.resolve('MANHATTAN')
.then(attachTitle)
.then(console.log);
