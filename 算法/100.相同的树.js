/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

/**
 * 递归 一直遍历到两棵树的最后一个节点再进行对比
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) { return true }
  if (p === null || q === null) { return false }
  if (p.val !== q.val) { return false }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};


/**
 * 用两个栈 先放进去root 开始循环后每次都弹出一个进行对比 再把左右节点都放到数组里
 * 下次进来接着对比
 */
/* var isSameTree = function (p, q) {
  if (p === null && q === null) return true
  if (p === null || q === null) return false

  let pQueue = [p]
  let qQueue = [q]

  while (pQueue.length && qQueue.length) {
    const pNode = pQueue.pop()
    const qNode = qQueue.pop()
    if (pNode.val !== qNode.val) {
      return false
    }

    if (qNode.left && pNode.left) {
      pQueue.push(pNode.left)
      qQueue.push(qNode.left)
    } else if (pNode.left || qNode.left) {
      return false
    }

    if (pNode.right && qNode.right) {
      pQueue.push(pNode.right)
      qQueue.push(qNode.right)
    } else if (pNode.right || qNode.right) {
      return false
    }
  };
  return pQueue.length === 0 && qQueue.length === 0
} */
// [1,2,1]
// [1,1,2]
// @lc code=end

