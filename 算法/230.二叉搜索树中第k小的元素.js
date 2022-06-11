/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
// 找出二叉搜索树的第 k 小的元素 最简单的做法就是遍历完节点在排个序？
// 捞比方法 只要遍历了把值都塞进去就可以拿到指定值 应该要在遍历的时候直接拿到对应小的值
/* var kthSmallest = function (root, k) {
  const stack = [root]
  const nodeValArr = []
  while (stack.length) {
    const node = stack.pop()
    nodeValArr.push(node.val)
    node.left && stack.push(node.left)
    node.right && stack.push(node.right)
  }
  nodeValArr.sort((a, b) => a - b)
  return nodeValArr[k - 1]
}; */

// 试试递归 思路应是 中序遍历 保存节点个数值 到 k 值时返回 ×
// 使用栈 k值就相当于遍历了k个数后每次都 -1 就会到指定的最小值
var kthSmallest = function (root, k) {
  const stack = []
  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    k--
    if (k === 0) break
    root = root.right
  }
  return root.val
}
// @lc code=end

