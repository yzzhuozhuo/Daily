var str = '12233445'
function clearRepeat (str) {
  var arrStr = [...new Set(str.split(''))].sort().join('')
  return arrStr
}
console.log(A(str)) // 12345