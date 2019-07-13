// 将参数从一个函数传递到另外一个函数

function foo() {
  bar.apply(this, arguments)
}
function bar(a, b, c) {
  console.log(a, b, c)
}

foo(1, 2, 3)

// 将arguments转换成真正的数组

function func(...arguments) {
  console.log(arguments);
}

func(1, 2, 3)

// 伪数组转换成真正数组的方法
let arrayLike = { 0: 'name', 1: 'age', 2: 'sex', length: 3 }

// let arr = Array.prototype.slice.call(arrayLike);
// let arr = Array.prototype.splice.call(arrayLike, 0)
// let arr = Array.from(arrayLike);
let arr = Array.prototype.concat.apply([], arrayLike);
console.log(arr);