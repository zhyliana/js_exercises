var sum = function() {
  var sum = 0;
  var args = [].slice.call(arguments);
  args.forEach ( function(i) { sum += i })
  return sum;
};

console.log(sum(1,2,3,4));