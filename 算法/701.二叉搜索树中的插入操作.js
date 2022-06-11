/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
// 根据中序遍历的规则 判断要找的节点是大于还是小于当前节点 如果小 则放左边 大 则放右边  如果左或右已经右节点 那么接着让节点等于left 或者right
var insertIntoBST = function (root, val) {
  if (root === null) { return new TreeNode(val) }
  let pre = root

  while (pre !== null) {
    if (val < pre.val) {
      if (pre.left === null) {
        pre.left = new TreeNode(val)
        break
      } else {
        pre = pre.left
      }
    } else {
      if (pre.right === null) {
        pre.right = new TreeNode(val)
        break
      } else {
        pre = pre.right
      }
    }
  }
  return root
};
// @lc code=end

