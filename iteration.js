// bubbleSort
var bubbleSort = function (arr) {
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < (arr.length - 1); i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
      }
    }
  }
  return arr;
};

// console.log(bubbleSort([1,2,3,-4, -8,8,1.5,2]))

// subStrings
var substrings = function (str_in) {
  var substrs = [];
  for (var i = 0; i < str_in.length; i++) {
    for (var j = str_in.length; j > i; j--) {
      // console.log("--------------");
      console.log("i " + i);
      console.log("j " + j);
      console.log(str_in.slice(i, j));
      substrs.push(str_in.slice(i, j))
    }
  }
  return substrs;
};

console.log(substrings('cat'));