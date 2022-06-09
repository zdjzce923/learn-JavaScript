/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
// 递归 当前节点比上个节点大 既满足二叉搜索树
/* var isValidBST = function (root) {
    let prev = Number.MIN_SAFE_INTEGER
    let result = true
    helper(root)
    return result
    function helper (node) {
        if (node !== null && result) {
            helper(node.left)
            result = result && node.val > prev
            prev = node.val
            helper(node.right)
        }
    }
}; */

// 栈 将所有左边的节点先放入栈中 弹出时与暂存值进行对比 接着再将右节点放入栈中进行对比
var isValidBST = function (root) {
    const stack = []
    let prev = -Infinity
    while (stack.length || root !== null) {
        while (root != null) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop()
        if (root.val <= prev) return false
        prev = root.val
        root = root.right
    }
    return true
}

// @lc code=end

