/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 * 输入：head = 1 → 2 → 3 → 4 → 5, n = 2
 *              
 * 输出：[1,3,4,5]
 * 让fast移动指定的n 接着只要让fast和slow一起移动 直到fast的next为null 此时slow的下一个节点就是要删除的节点
 */
const removeNthFromEnd = function (head, n) {
  let slow = fast = dummy = new ListNode(-1, head)
  while (n--) {
    fast = fast.next
  }
  while (fast.next !== null) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return dummy.next

}

// @lc code=end 