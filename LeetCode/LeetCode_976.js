/* 
给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

如果不能形成任何面积不为零的三角形，返回 0。

示例 1：
输入：[2,1,2]
输出：5
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
  A.sort((a, b) => b - a);
  for (let i = 0, len = A.length - 2; i < len; i++) {
    if (A[i] < A[i + 1] + A[i + 2]) {
      return A[i] + A[i + 1] + A[i + 2];
    }
  }
  return 0;
};
let A = [1,2,1]
console.log(largestPerimeter(A))