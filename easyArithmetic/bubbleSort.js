/* 
冒泡排序：时间复杂度 O(n^2)
思想：在冒泡排序中，是从第一个元素开始依次和相邻之间的元素进行比较。
如果第一个元素大于第二个元素，则交换他们的位置，否则第二个和第三个元素进行比较，依次类推。
第一轮结束后，会将数组中最大的元素放在数组的末尾。
*/

/**
 *
 *
 * @param {*} arr
 * @returns
 */
function bubbleSort(arr) {
  var i, j, len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
var arr = [1, 3, 4, 2, 6];
console.log(bubbleSort(arr))