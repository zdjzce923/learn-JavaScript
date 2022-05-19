/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
// 使用队列 将每层的children 放进队列中
var levelOrder = function (root) {
    if (root === null) return []
    let result = []
    let queue = [root]

    while (queue.length) {
        let len = queue.length
        let tierArr = []
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (node.children.length > 0) {
                queue.push(...node.children)
            }
            tierArr.push(node.val)
            /* if (i === len - 1) {
                result.push(null)
            } */
        }
        result.push(tierArr)
    }
    return result
};
// @lc code=end

