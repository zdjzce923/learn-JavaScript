/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 先找 两个节点的祖先 如果不同接着往上找
var lowestCommonAncestor = function (root, p, q) {
  // 如果root为空或者为p q 则返回 因为找到了一个节点就不能接着往下找了 不可能比这更深
  // 递归的核心在于 到最深的节点不能再递的时候 也就是为空或者找到一个目标节点时 就要返回这个节点
  // 如果左子树啥也没找着 那么两个节点一定在右子树上
  if (root === null || root === p || root === q) {
    return root
  }
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (!left) {
    return right
  }

  if (!right) {
    return left
  }

  return root
};
// @lc code=end

