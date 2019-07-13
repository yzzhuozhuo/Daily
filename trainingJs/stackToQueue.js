/* 
用栈实现队列
栈：后进先出 push pop
队列：先进先出 push shift
入队：将元素入栈1
出队：判断栈2是否为空，如果为空，则将栈1中的所有元素pop，并push进栈2，栈2出栈
如果不为空，栈2直接出栈。
*/

function stack() {
  var item = [];
  this.push = function (node) {
    item.push(node);
  }
  this.pop = function (node) {
    return item.pop();
  }
  this.isEmpty = function () {
    return item.length === 0;
  }
}

let stack1 = new stack();
let stack2 = new stack();

function push(node) {
  stack1.push(node);
}

function pop() {
  if (stack1.isEmpty() && stack2.isEmpty()) {
    throw Error("Queue is empty")
  }
  if (stack2.isEmpty()) {
    while (!stack1.isEmpty()) {
      stack2.push(stack1.pop())
    }
  }
  return stack2.pop()
}

