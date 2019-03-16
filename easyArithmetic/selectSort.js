/* 
选择排序：在选择排序中，我们先假设数组中第一个元素最小，
然后从下个元素开始寻找比该元素小的其它元素，
如果找到，则在一次循环结束后交换这两个元素的位置。
这之后位于数组中第一个位置中的元素就是最小的了，也就是1位置前的元素是有序的了。
*/

/**
 *
 *
 * @param {*} arr
 * @returns
 */
function selectSort(arr) {
  var i, j, minIndex, len = arr.length;
  for (var i = 0; i < len; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i != minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}
var arr = [1,4,5,7,2,3]
console.log(selectSort(arr))