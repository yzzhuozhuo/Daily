var arr = [1, [2, [3, 4]]];

function flatten(arr) {
  return arr.reduce(function (prev, next) {
    console.log(prev, next);
    return prev.concat(Array.isArray(next) ? flatten(next) : next)
  }, []);
}

function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

console.log(flatten(arr));