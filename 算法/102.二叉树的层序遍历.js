/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * 使用队列 队列只维护一层节点 对队列的节点进行循环 将当前层级的节点放入结果值中 
 * 如果有左右节点则接着放入队列里 作为下个层级继续遍历
 */
var levelOrder = function (root) {
    if (root === null) return []
    let queue = [root]
    let result = []
    while (queue.length) {
        let len = queue.length
        let arr = []
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            arr.push(node.val)
        }
        arr.length ? result.push(arr) : ''
    }
    return result
};
// @lc code=end

