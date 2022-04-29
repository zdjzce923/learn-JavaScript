/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 * root1 = [1,3,2,5], 
 * root2 = [2,1,3,null,4,null,7]
 */

/**
 * 合并二叉树
 * 方法1. 递归
 */
/* var mergeTrees = function (root1, root2) {
  
  if (!root1 && !root2) { return null }
  if (!root1) { return root2 }
  if (!root2) { return root1 }
  root1.val += root2.val

  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)
  return root1

}; */

/**
 * 方法2 队列 只有在两个节点都存在的时候再放入节点
 */
var mergeTrees = function (root1, root2) {
  if (root1 == null || root2 == null) {
    return root1 == null ? root2 : root1
  }
  let stack = [root1, root2]
  while (stack.length) {
    let root1Node = stack.shift()
    let root2Node = stack.shift()
    root1Node.val += root2Node.val

    if (root1Node.left && root2Node.left) {
      stack.push(root1Node.left)
      stack.push(root2Node.left)
    }

    if (!root1Node.left) {
      root1Node.left = root2Node.left
    }

    if (root1Node.right && root2Node.right) {
      stack.push(root1Node.right)
      stack.push(root2Node.right)
    }

    if (!root1Node.right) {
      root1Node.right = root2Node.right
    }

  }
  return root1
}
// @lc code=end

