/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
const preorderTraversal = function (root) {
	const arr = []

	function leftTraverse (root) {
		if (root === null) {
			return
		}
		arr.push(root.val)
		leftTraverse(root.left)
		leftTraverse(root.right)
	}
	leftTraverse(root)
	return arr
};
// @lc code=end

