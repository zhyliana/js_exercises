Function.prototype.myBind = function(obj){
  var fun = this;

  return function(){
    var args2 = [].slice.call(arguments);
    return fun.apply(obj, args2);
  }
}


var myFunction = function () {
  return this.name;
}



var cat = {name: "CJ"};
console.log(myFunction.myBind(cat)());


