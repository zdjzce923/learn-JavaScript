/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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

// 方法1. 队列 拿到每层节点放到队列里 弹出指定个数 下次接着进来弹 弹的时候跟当前的max进行对比
/* var largestValues = function (root) {
    let result = []
    if (root === null) { return result }
    let queue = [root]
    while(queue.length) {
        let len = queue.length
        let max = -Infinity
        while(len--) {
            let node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            max = Math.max(max, node.val)
        }
        result.push(max)
    }
    return result
}; */

// 方法2. 递归
var largestValues = function (root) {
  let result = []
  const maxNodeVal = (node, deep) => {
    if (node === null) {
      return
    }
    if (result[deep] !== undefined) {
      result[deep] = Math.max(result[deep], node.val);
    } else {
      result[deep] = node.val;
    }

    maxNodeVal(node.left, deep + 1)
    maxNodeVal(node.right, deep + 1)
  }
  maxNodeVal(root, 0)
  return result
}


// @lc code=end

