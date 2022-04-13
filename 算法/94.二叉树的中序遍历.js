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
 * 遵循 左子树 --- 根节点 ---- 右子树的遍历原则
 * 什么顺序就放在哪个位置原则，先看看左边有没有 没有则push 再看右边的节点
 * 
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

