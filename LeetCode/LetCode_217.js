/* 
给定一个整数数组，判断是否存在重复元素。

如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var numsSort = nums.sort();
  for (var i = 0; i < numsSort.length - 1; i++) {
    if (numsSort[i] == [numsSort[i + 1]]) {
      return true
    }
  }
  return false;
};

/**
 *
 *
 * @param {*} nums
 * @returns
 */
var containsDuplicate = function (nums) {
  var newNums = new Set(nums)
  return newNums.size != nums.length
}
// var nums = [2]
// console.log(containsDuplicate(nums))
