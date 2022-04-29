/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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

/**
 * 输入：root = [1,2,5,3,4,null,6] 
 * 输出：[1,null,2,null,3,null,4,null,5,null,6]
 */

/**
 * 方法1 前序递归。将二叉树进行前序遍历 接着循环把left都弄为null 换到right去
 */
/* const flatten = function (root) {
  let list = []
  preOrderTraverse(root, list)
  // 将节点放入list后开始移动left节点
  for (let i = 1; i < list.length; i++) {
    let prev = list[i - 1] // root
    prev.left = null
    prev.right = list[i]
  }

};

// 前序遍历 全部塞到一个list里
function preOrderTraverse (node, list) {
  if (node !== null) {
    list.push(node)
    preOrderTraverse(node.left, list)
    preOrderTraverse(node.right, list)
  }
} */

/**
 * 方法2
 * 循环前序遍历的过程中更改节点
 */
const flatten = function (root) {
  if (root === null) { return }
  let nodeStack = [root]
  let prev = null
  while (nodeStack.length > 0) {
    const node = nodeStack.pop()
    if (prev !== null) {
      prev.left = null
      prev.right = node
    }
    if (node.right !== null) {
      nodeStack.push(node.right)
    }
    if (node.left !== null) {
      nodeStack.push(node.left)
    }
    prev = node
  }
}


/**
 * 方法3
 * 递归
 */
/* const flatten = function (root) {
  if (root === null) return
  flatten(root.left)
  let right = root.right
  root.right = root.left
  root.left = null
  while (root.right !== null) {  // 不理解
    root = root.right
  }
  flatten(right)
  root.right = right
} */
// @lc code=end

