var a = 1;
var obj = {
  num: 1
}
function changeA(num) {
  num = 3
}
function changeB(obj) {
  obj.num = 3
}
changeA(a)
changeB(obj)
console.log(a,obj.num)
 