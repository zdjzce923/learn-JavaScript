/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
// 递归
var isBalanced = function (root) {
    function balanced (node) {
        if (node === null) { return 0 }
        const left = balanced(node.left)
        if (left === -1) return -1
        const right = balanced(node.right)
        if (right === -1) return -1
        if (Math.abs(left - right) > 1) {
            return -1
        } else {
            return Math.max(left, right) + 1
        }
    }
    return balanced(root) !== -1
};


// @lc code=end

