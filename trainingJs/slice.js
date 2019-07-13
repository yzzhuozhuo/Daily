/* 
slice 方法的实现
*/

Array.prototype.mySlice = function () {
  let start = 0;
  let end = this.length;
  if (arguments.length === 1) {
    start = arguments[0];
  }
  if (arguments.length === 2) {
    start = arguments[0];
    end = arguments[1];
  }

  let temp = [];
  for (let i = start; i < end; i++) {
    temp.push(this[i])
  }
  return temp;
}

var fakeArr = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

var realyArr = [].mySlice.call(fakeArr);
console.log(realyArr);
