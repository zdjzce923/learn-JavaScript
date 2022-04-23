/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 3 -> 2 -> 1 -> 4 
 *      ↑---------|
 */

/**
 * 方法1 用对象去保存 每次都放进去 如果对象中有这个节点就返回该节点
 */
/* var detectCycle = function (head) {
  let nodeSet = new Set()
  while (head !== null) {
    if (nodeSet.has(head)) {
      return head
    }
    nodeSet.add(head)
    head = head.next
  }
  return null
} */

/**
 * 方法2 用快慢指针 如果他们相遇了 就说明是环形链表 再进行判断拿到
 */
var detectCycle = function (head) {
  if (head === null) { return null }
  let slow = fast = head
  while (fast !== null) {
    slow = slow.next
    if (fast.next !== null) {
      fast = fast.next.next
    } else {
      return null
    }
    if (fast === slow) {
      let ptr = head
      while (ptr !== slow) {
        ptr = ptr.next
        slow = slow.next
      }
      return ptr
    }
  }
  return null
}
// @lc code=end

