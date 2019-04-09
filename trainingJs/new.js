// new操作符的源码

/* 
new 操作符做了这几件事
1.它创建了一个全新的对象
2.它会被执行[[prototype]] 也就是 __proto__ 链接
3.它使this指向新创建的对象
4.通过new 创建的对象最终被[[prototype]]连接到这个函数的prototype
5.如果函数没有返回Object类型(包含Function,Date,Array,RegExg,Error)
  那么new表达式中的函数调用将返回该对象的引用
*/

function New(func) {
  var res = {};
  if (func.prototype !== null) {
      res.__proto__ = func.prototype;
  }
  var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
      return ret;
  }
  return res;
}
function A(a,b) {
  this.a = a;
  this.b = b;
}
var obj = New(A, 1, 2);
// equals to
// var obj = new A(1, 2);
console.log(obj)