/* 
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2

示例 2:

输入: [1,3,5,6], 2
输出: 1
*/

/**
 *
 *
 * @param {*} nums
 * @param {*} target
 */
function searchInsert(nums, target) {
  for (var i = 0, ii = nums.length; i < ii; i++) {
    if (target <= nums[i]) {
      return i
    }
  }
  return i;
}
var nums = [1, 3, 4, 6]
console.log(searchInsert(nums, 5)) // 3