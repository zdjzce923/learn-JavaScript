/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
    let stack = [root]
    let result = []
    while (stack.length) {
        let len = stack.length
        let tierNodeArr = []
        while (len > 0) {
            let node = stack.shift()
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
            tierNodeArr.push(node.val)
            len--
        }
        result.push(getAverage(tierNodeArr))
    }
    return result
};

function getAverage (nums) {
    return nums.reduce((a, b) => a + b) / nums.length
}
// @lc code=end

