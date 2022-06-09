/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
//  使用栈 中序遍历 把当前值小于上个值的节点值保存起来
function replaceNodeVal (node1, node2) {
  let temp = node1.val
  node1.val = node2.val
  node2.val = temp
}
var recoverTree = function (root) {
  const stack = []
  let x = null, y = null, pre = null
  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root)
      root = root.left
    }

    root = stack.pop()
    // 在小于上一个节点时 y的值会始终变化 给到当前的值 
    // 而 x 的值在一开始进入条件时 就直接确定为上一个节点值 一直等待 y 更新完成 再进行x, y交换
    if (pre !== null && root.val < pre.val) {  
      y = root
      if (x === null) {
        x = pre
      } else { break }
    }
    pre = root  // 作为‘上个节点存在’ 下次循环时进行对比
    root = root.right
  }
  replaceNodeVal(x, y)
};
// @lc code=end

