/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */

// 深度优先
/* var hasPathSum = function (root, targetSum) {
    if (root == null) {
        return false;
    }
    if (root.left == null && root.right == null) {
        return targetSum == root.val;
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
} */

// 广度优先 用一个队列保存节点 一个队列保存累加值
var hasPathSum = function (root, targetSum) {
    if (root === null) return false
    let nodeQue = [root]
    let valQue = [root.val]
    while (nodeQue.length) {
        let len = nodeQue.length
        for (let i = 0; i < len; i++) {
            let node = nodeQue.shift()
            let val = valQue.shift()
            if (val === targetSum && node.left === null && node.right === null) return true
            if (node.left) {
                nodeQue.push(node.left)
                valQue.push(node.left.val + val)
            }
            if (node.right) {
                nodeQue.push(node.right)
                valQue.push(node.right.val + val)
            }
        }
    }
    return false
}
// @lc code=end

