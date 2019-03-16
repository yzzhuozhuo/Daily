/* 
插入排序：通过构建有序序列，对于未排序数据，在已排序的序列中从后向前扫描，
找到相应的位置插入。
*/

function inserSort(arr) {
  var i, j, temp, len = arr.length;
  // 从元素的第二个位置开始比较
  for (i = 1; i < len; i++) {
    // 创建一个元素的副本
    temp = arr[i];
    // 和前面有序部分进行比较，如果元素副本小于有序部分的元素，则移动该元素
    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      // 移动
      arr[j + 1] = arr[j]
    }
    // 将副本元素插入到有序部分合适的位置上
    arr[j + 1] = temp;
  }
  return arr;
}

// 测试
var arr = [3, 2, 4, 1, 5]
console.log(inserSort(arr))