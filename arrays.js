// dups
var myUnique = function (arr) {
  var uniq = [];
  for (var i = 0; i < arr.length; i++) {
    if (uniq.indexOf(arr[i]) < 0) {
      uniq.push(arr[i]);
    }
  }
  return uniq
}
//
// console.log(myUnique([1,2,3,1,2,5,7]))

// twoSum
var twoSum = function (arr) {
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = (i + 1); j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        results.push([i, j]);
      }
    }
  }
  return results
}

//console.log(twoSum([-1, 0, 2, -2, 1]));

//transpose
var myTranspose = function(arr) {
  results = [];
  for (var i = 0; i < arr.length; i++) {
    results.push([])
    for (var j = 0; j < arr.length; j++) {
      results[i].push(arr[j][i]);
    }
  }
  return results;
}

rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

console.log(myTranspose(rows));