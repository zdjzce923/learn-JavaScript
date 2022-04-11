/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
const inorderTraversal = function (root) {
	if (root === null) {
		return []
	}
	const arr = []
	function centerTraverse (root) {
		if (root === null) {
			return
		}
		centerTraverse(root.left)
		arr.push(root.val)
		centerTraverse(root.right)
	}
	centerTraverse(root)
	return arr
};
// @lc code=end

