/* 
提交记录
给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [9,4]
*/

/**
 *
 *
 * @param {*} nums1
 * @param {*} nums2
 */
function intersection(nums1, nums2) {
  return [...new Set(nums1.filter(item =>
    nums2.includes(item)
  ))]
};
