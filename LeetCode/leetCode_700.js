/* 
给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。
 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (root == null) {
    return root
  }
  if (val < root.val) {
    return searchBST(root.left, val)
  } else if (val > root.val) {
    return searchBST(root.right, val)
  } else {
    return root
  }
};

/**
 *
 *
 * @param {*} root
 * @param {*} val
 * @returns
 */
var searchBST = function (root, val) {
  if (!root) {
    return null;
  }
  var queue = [root];
  while (queue.length) {
    current = queue.shift()
    if (!queue) {
      continue;
    }
    if (current.val === val) {
      return current;
    }
    queue.push(current.left,current.right);
  }
  return null;
}