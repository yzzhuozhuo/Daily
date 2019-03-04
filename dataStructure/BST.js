/* 
BST 二叉查找树
*/

// 定义一个Node对象
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

// 显示保存在节点中的数据
function show() {
  return this.data;
}

// 创建一个类，用来表示二叉查找树
function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}

// insert() 用来向树中插入新节点
function insert(data) {
  // 将左右子节点的引用初始化为空，可能是叶子节点
  var n = new Node(data, null, null);
  if (this.root = null) {
    this.root = n;
  }
  else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      }
      else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

// 遍历二叉树 先序 中序 后序

// 中序
function inOrder (node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + '')
    inOrder(node.right);
  }
}

// 测试中序遍历
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
// inOrder(nums.root)