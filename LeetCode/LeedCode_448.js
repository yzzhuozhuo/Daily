/* 
输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]
*/

var findDisappearedNumbers = function(nums) {
  var newNums = []
  var result = []
  for (var i = 1; i <= nums.length; i++) {
    newNums[i] = nums.findIndex(e => e === i)
  }
  for (var i in newNums) {
    if (newNums[i] === -1) {
      result.push(i)
    }
  }
  return result
};
var arr = [4,3,2,7,8,2,3,1];
findDisappearedNumbers(arr);

