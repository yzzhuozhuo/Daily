/* 
队列实现栈
队列：先进先出 push shift
栈：后进先出 push pop
*/

function Queue() {
  let items = [];
  this.enqueue = function (node) {
    items.push(node)
  }
  this.dequeue = function () {
    return items.shift();
  }
  this.front = function () {
    return items[0];
  }
  this.isEmpty = function () {
    return items.length === 0;
  }
  this.clear = function () {
    items = [];
  }
}



