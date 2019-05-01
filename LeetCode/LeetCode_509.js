/* 
斐波那契数列
 */

 /**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N == 0 || N == 1) {
     return 
  }
    return fib(N-1) + fib(N - 2)
};