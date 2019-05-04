/* 
给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let res = [];
  nums1.forEach((v,i) => {
    var index = nums2.indexOf(v);
    if (index > -1) {
      res.push(v);
      nums2.splice(i,1);
    }
  })
  return res;
};