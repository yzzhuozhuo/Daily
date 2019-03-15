// 'aabbcdef'.trim('a') ---> 'bbcdef'

// function trim(str) {
//   var reg = /(.)(?=.*\1)/g;//预搜索方式（有的叫断言）
//   var result = str.replace(reg, "");
//   return result
// }
// var str = 'aabbcdef'
// console.log(trim(str))
var str = 'aaabbbcccdfg'
function trim1 (str) {
  var reg = new RegExp("a", "g");
  var a = str.replace(reg, "");
  return a
}
console.log(trim1(str))

function trim2 (str) {
  return str.split("a").join()
}
// console.log(trim2(str))