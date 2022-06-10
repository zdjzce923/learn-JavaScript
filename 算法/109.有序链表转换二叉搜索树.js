/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// -10 -> -3 -> 0 -> 5 -> 9
// 快慢双指针 跟数组的思路其实很像 就是找到中点 再进行递归
var sortedListToBST = function (head) {
  if (head === null) return null
  return toBST(head, null)
};
const toBST = (head, tail) => {
  if (head === tail) return null
  let fast = head
  let slow = head
  while (fast !== tail && fast.next !== tail) {
    fast = fast.next.next
    slow = slow.next
  }
  const root = new TreeNode(slow.val)
  root.left = toBST(head, slow)
  root.right = toBST(slow.next, tail)
  return root
}
// @lc code=end

