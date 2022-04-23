/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
/**
 * 递归深度优先 对称二叉树当前节点的left等于right
 */

var isSymmetric = function (root) {
  return transitTreeNode(root.left, root.right)
}

function transitTreeNode (left, right) {
  if (!left && !right) return true
  if (!left || !right) return false
  return left.val === right.val && transitTreeNode(left.left, right.right) && transitTreeNode(right.left, left.right)
}
// @lc code=end

