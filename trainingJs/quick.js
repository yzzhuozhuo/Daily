function quickSort(arr) {
  if (arr.length == 0) {
    return arr;
  }
  var left = [],
    right = [],
    mid = arr.splice(0, 1);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    }
    else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(mid,quickSort(right));
}
var arr = [2,1,4,3,6,7];
console.log(quickSort(arr))