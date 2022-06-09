/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
// 从底部开始的 就老老实实递归吧 用栈那真是写到死
var sortedArrayToBST = function (nums) {
  return dfsToBST(nums, 0, nums.length - 1)
};
const dfsToBST = (nums, left, right) => {
  if (left > right) {
    return null
  }

  let middleNum = Math.floor((left + right) / 2)
  const node = new TreeNode(nums[middleNum])

  node.left = dfsToBST(nums, left, middleNum - 1)
  node.right = dfsToBST(nums, middleNum + 1, right)

  return node
}
// @lc code=end

