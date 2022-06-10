/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */

// 这道题求数组的最大值 最大值的左边作为最大值节点的左节点 右边作为最大值的右节点
// 既然如此 先求出最大值 创建节点 让 left 和 right 去递归 传入截取后的数组
var constructMaximumBinaryTree = function (nums) {
  return helper(nums)
};
function helper (nums) {
  if (nums.length === 0) return null
  const max = Math.max(...nums)
  const maxIndex = nums.findIndex( item => item === max )
  const root = new TreeNode(max)

  root.left = helper(nums.slice(0, maxIndex))
  root.right = helper(nums.slice(maxIndex + 1, nums.length))
  return root
}
// @lc code=end

