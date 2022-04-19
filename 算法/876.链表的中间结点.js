/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @param {ListNode} head
 * @return {ListNode}
 * 1 2 3 4 5
 *     ↑
 *         ↑
 * 找出中间节点 3 4 5
 * fast跳两格 slow 跳一格 当fast跳到最后slow的位置就是总长度的二分之一
 */
var middleNode = function (head) {
  let fast = slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}
// @lc code=end

