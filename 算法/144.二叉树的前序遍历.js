/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */


/* const preorderTraversal = function (root) {
  const arr = []

  function leftTraverse (root) {
    if (root === null) {
      return
    }
    arr.push(root.val)
    leftTraverse(root.left)
    leftTraverse(root.right)
  }
  leftTraverse(root)
  return arr
}; */

/**
 * 二叉树的前序遍历 循环 栈解法 
 * 前序遍历遵照 根节点 左节点 右节点的遍历方式 将根节点放入栈中 接着将节点弹出栈 后续遍历左右节点
 */
const preorderTraversal = function (root) {
  if (root === null) {
    return []
  }

  let res = []
  let cacheNode = [root]

  while (cacheNode.length) {
    const cur = cacheNode.pop() // 弹出
    res.push(cur.val)
    cur.right && cacheNode.push(cur.right)
    cur.left && cacheNode.push(cur.left)
  }

  return res

}
// @lc code=end

