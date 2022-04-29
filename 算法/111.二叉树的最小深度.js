/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */

/**
 * 没有子节点就是叶子结点
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：2 
 */
var minDepth = function (root) {
  if (root === null) return 0
  let left = minDepth(root.left)
  let right = minDepth(root.right)
  if (left !== 0 && right !== 0) {
    return Math.min(left, right) + 1
  } else if (left === 0) {
    return right + 1
  } else if (right === 0) {
    return left + 1
  }
};
// @lc code=end

