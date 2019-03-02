// 快速排序 quickSort
/**
 * @param {*} arr
 * @returns
 */
function quickSort(arr) {
  if (arr.length === 0) {
    return arr
  }
  let left = [],
    right = [],
    pivot = arr.splice(0, 1)
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(pivot, quickSort(right))
}

let arr = [2, 3, 1, 4, 5, 6, 8, 7];
quickSort(arr)
