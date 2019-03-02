/* 
链表
*/
// 使用构造函数来创建节点
function Node (element) {
  this.element = element; // element 用来保存节点上的数据 
  this.next = null; // next 用来保存指向下一个节点的指针
}

// LList 类提供了对链表进行操作的方法
function LList () {
  // head节点的属性被初始化为null，当有新元素插入时，next指针会指向新的元素
  this.head = new Node('head');
  this.find = find;
  this.findPrevious = findPrevious;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
}

// find() 查找节点
// 首先创建一个新节点，并将head节点赋值给这个新节点，然后在链表上进行循环
function find (item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next
  }
  return currNode;
}

// insert() 插入新节点
function insert (newElement,item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

// display 方法显示链表中的元素
function display () {
  var currNode = this.head;
  while(!(currNode.next == null)) {
    console.log(currNode.next.element)
    currNode = currNode.next
  }
}

// findPrevious() 
function findPrevious (item) {
  var currNode = this.head;
  while (!(currNode.next = null) && !(currNode.next.element != item)) {
    currNode = currNode.next
  }
  return currNode;
} 

// remove()
function remove (item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next
  }
}

var names = new LList();
names.insert('yz','head');
names.insert('yzz','yz');
names.insert('yzzz','yzz');
names.display()