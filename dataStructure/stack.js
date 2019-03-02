/* 
栈：是一种高效的数据结构，因为数据只能在栈顶添加或者删除，栈被称为一种后进先出的数据结构（LIFO）
由于栈内的元素只能在栈顶被访问，所以任何不在栈顶的元素都不能被访问，为了得到栈底的元素，必须拿掉栈顶的元素
对栈主要的两种操作就是：将一个元素压入栈，和将一个元素弹出栈
入栈使用push()方法 push()方法就是给数组的末尾添加一项
出栈使用pop()方法 pop()方法就是从数组的末尾删除一项
*/
// 实现一个栈类

function stack() {
  this.dataStore = [];
  this.top = 0; // 变量top记录栈顶的位置，栈顶起始的位置是0
  this.push = push;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}
function push(element) {
  this.dataStore[this.pop++] = element
}
function peek() {
  return this.dataStore[this.top - 1]
}
function pop(){
  this.dataStore[--this.top]
}
function clear () {
  this.top = 0
}
function length () {
  return this.top
}
