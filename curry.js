var curriedSum = function(numArgs){
  var numbers = [];
  return function  _curriedSum (num){
    numbers.push(num);
    if(numbers.length === numArgs) {
      return sum(numbers);
    }
    else{
      return _curriedSum;
    }
  }
};

Function.prototype.curry = function(numArgs){
  var args = [].slice.call(arguments);
  var numbers = []
  var fun = this
  return function _curry(num) {
    numbers.push(num);
    if(numbers.length === numArgs){
      return fun.apply(this, numbers)
    }
    else {
      return _curry;
    }
  };
}




var sum = function() {
  var sum = 0;
  var args = [].slice.call(arguments);
  args.map( function(el){ sum += el })
  return sum;
};

// console.log(curriedSum(4)(5)(30)(20)(1))

console.log(sum.curry(4)(5)(30)(20)(1));

// // you'll write `Function#curry`!
// // var f1 = sum.curry(3);
// // var f2 = f1(4);
// // var f3 = f2(20);
// // var result = f3(3); // = 27
//
// // OR
// console.log(sum.curry(3)(4)(20)(3))