/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
// 继续用捞比方法直接怼栈 或者递归就完了
/* var searchBST = function (root, val) {
  const stack = [root]
  let findNode = null
  while (stack.length) {
    const node = stack.pop()
    if (node.val === val) return findNode = node
    node.left && stack.push(node.left)
    node.right && stack.push(node.right)
  }
  return findNode

}; */

var searchBST = function (root, val) {
  if (root === null) return null
  if (root.val === val) return root
  return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val)

};
// @lc code=end

