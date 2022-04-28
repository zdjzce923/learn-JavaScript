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
 * 将二叉树进行前序遍历 接着循环把left都弄为null 换到right去
 */
const flatten = function (root) {
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
}
// @lc code=end

