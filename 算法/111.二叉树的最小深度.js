/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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

/**
 * 没有子节点就是叶子结点
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：2 
 * 方法1 递归
 * 与二叉树最大深度思想相近 递归的终止条件相同
 * 将左右节点进行递归 左右节点可能分别都为空 如果像最大深度那样写 在空的情况下也会返回1 求最小值就为1 这样不对
 * 所以对递归的返回值进行额外判断 当两边的节点都有子节点时 就求他们的最小值
 * 当左节点为空 直接取已经求好的右边的最小值 右节点为空也一样
 */
/* var minDepth = function (root) {
  if (root === null) return 0
  let left = minDepth(root.left)
  let right = minDepth(root.right)

  if (left !== 0 && right !== 0) {
    return Math.min(left, right) + 1
  } else if (left === 0) {
    return right + 1
  } else if (right === 0) {
    return left + 1
  }
}; */


/**
 * 方法2 迭代
 * 用队列存储每次放进去的节点 
 * 默认就执行一次 让累加值+1 并且记录当前的队列里的数量 遍历指定的队列次数 其实就是当前的同级节点数量
 * 每次遍历都让队列出一个直到队列为空 看有无左右节点有就放入队列 没有就直接返回累加值
 * 这次的队列值为空以后下次进来dep还会++
 */
var minDepth = function (root) {
  if (root === null) { return 0 }
  let dep = 0
  let stack = [root]
  while (true) {
    dep++
    let size = stack.length
    while (size--) {
      let cur = stack.shift()
      if (!cur.left && !cur.right) {
        return dep
      }
      cur.left && stack.push(cur.left)
      cur.right && stack.push(cur.right)
    }
  }
}
// @lc code=end

