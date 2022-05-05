/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
/**
 * 递归 先找到与root某个节点相同的节点 找到后接着看两棵树是否完全相同
*/
var isSubtree = function (root, subRoot) {
  if (root === null) return false  // subroot是存在的 如果root不存在那么一定是false
  if (subRoot === null) return true // subRoot 为 null 时一定为true

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot) || isSameTree(root, subRoot)
};

function isSameTree (r, s) {
  if (!r && !s) return true
  if (!r || !s) return false
  if (r.val !== s.val) return false
  return isSameTree(r.left, s.left) && isSameTree(r.right, s.right)
}
// @lc code=end

