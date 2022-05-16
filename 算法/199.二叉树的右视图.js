/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**`
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
 * 队列 直接看右边有没有 有就加进去就完事了
 */
var rightSideView = function (root) {
    if (root === null) return []
    let result = []
    let queue = [root]
    while (queue.length) {
        let len = queue.length
        while (len) {
            let node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            if (len === 1) {
                result.push(node.val)
            }
            len--
        }
    }
    return result
};
// @lc code=end

