/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
// 广度优先  
/* 
 * 需要找到所有左叶子节点并全部累加 意味着需要把左节点跟右节点都放到队列里 再把左节点单独维护一个队列
 * 进行判断 如果左节点队列中有当前弹出的这个节点并且有左右节点 就直接弹出 如果此时左节点列表中还有这个节点说明它是叶子结点 直接累加
 */
var sumOfLeftLeaves = function (root) {
    if (root === null) return
    let queue = [root]
    let leftQueue = []
    let sum = 0
    while (queue.length) {
        let len = queue.length
        while (len) {
            let node = queue.shift()
            node.left && queue.push(node.left) && leftQueue.push(node.left)
            node.right && queue.push(node.right)

            if (leftQueue.includes(node) && (node.left || node.right)) {
                leftQueue.splice(leftQueue.findIndex(item => item === node), 1)
            }

            if (leftQueue.includes(node)) {
                sum += node.val
            }
            len--
        }
    }
    return sum

};
// @lc code=end

