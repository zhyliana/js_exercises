// multiples

var multiples = function (arr) {
  var result = [];

  arr.forEach(
    function (el) {
      result.push(el*2);
    }
  );

  return result;
};

// console.log(multiples([1,2,3]))

//myEach

var myEach = function (arr, func) {
  for (var i = 0; i < arr.length; i++){
    func(arr[i]);
  }
}



//myMap

var myMap = function(arr, func){
  var mapped = [];

  myEach(arr, function (a) {
    mapped.push(func(a));
  });

  return mapped;
}

function boo (a) {
  return a;
}

// console.log(myMap([1,2,3], boo))


//myInject
var myInject = function (arr, func) {
  var result = arr[0];
  var newArray = arr.slice(1);

  myEach(newArray, function (a) {
    result = func(result, a);
  });

  return result
}

function boo(result, a){
  return (result + a) ;
}
console.log(myInject(["add", "2", "raw"], boo))