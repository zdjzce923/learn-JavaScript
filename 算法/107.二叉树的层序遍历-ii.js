/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) return []
    let queue = [root]
    let result = []
    while (queue.length) {
        let len = queue.length
        let arr = []
        while (len > 0) {
            let node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            arr.push(node.val)
            len-- 
        }
        arr.length ? result.unshift(arr) : ''
    }
    return result
};
// @lc code=end

