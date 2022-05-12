/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 * 使用递归 每次将当前的节点拼接到数组里 直到叶子结点 返回整个数组
 */
var binaryTreePaths = function (root) {
    let pathArr = []
    const addPath = (node, arr = []) => {
        if (node === null) { return null }
        if (!node.left && !node.right) {
            arr.push(node.val)
            pathArr.push(arr.join('->'))
        }
        addPath(node.left, arr.concat(node.val))
        addPath(node.right, arr.concat(node.val))
    }
    addPath(root, [])
    return pathArr
};
// @lc code=end

