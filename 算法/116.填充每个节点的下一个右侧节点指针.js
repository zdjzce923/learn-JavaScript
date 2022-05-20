/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 方法1 使用队列
// 使用队列 保存每层节点并进行遍历 如果当前的 i 为最后一个 则next为null
// 否则next 为当前队列的第一个node
/* var connect = function (root) {
    if (root === null) { return root }
    let stack = [root]
    while (stack.length) {
        let len = stack.length
        for (let i = 0; i < len; i++) {
            let node = stack.shift()
            if (node.left !== null && node.right !== null) {
                stack.push(node.left)
                stack.push(node.right)
            }
            if (i === len - 1) {
                node.next = null
            } else {
                node.next = stack[0]
            }
        }
    }
    return root
}; */


// 方法2 使用递归

var connect = function (root) {
    if (root === null) { return root }
    curveTierNode(root)
    return root
}

function curveTierNode (node) {
    if (node === null) { return }
    let left = node.left
    let right = node.right
    while (left !== null) {
        left.next = right
        left = left.right
        right = right.left
    }
    curveTierNode(node.left)
    curveTierNode(node.right)
}

// @lc code=end

