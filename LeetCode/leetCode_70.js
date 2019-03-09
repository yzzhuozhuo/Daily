/* 
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。
典型的斐波那契数列 
*/

/**
 *
 * 
 * @param {*} n
 */
function climbStairs (n) {
  if (n == 1 || n == 2) {
    return n
  }
  var i = 1;
  var j = 2;
  for (var k = 0; k < n-2; k++) {
    var temp = i + j;
    i = j;
    j = temp;
  }
  return j;
}
