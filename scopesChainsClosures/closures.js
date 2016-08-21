function foo(){
  var bar;
  quux=10;
  function zip(){
    bar = true;
    var quux;
  }
  return zip;
}
