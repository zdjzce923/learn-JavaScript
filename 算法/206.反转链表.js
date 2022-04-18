/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}ls
 * 输入：head = null 1 → 2 → 3 → 4 → 5
 * 输出：       5 → 4 → 3 → 2 → 1
 */

/**
 * 思路: 设置左右指针将节点的指向反过来 首先创建节点保存状态值(即要改变指向的节点)为null 当前的节点如果不为null 就接着遍历 
 * 先保存下个节点 再将当前节点指向状态值 最后将要遍历的节点值换为原来的 next 节点
 */
var reverseList = function (head) {
  let prev = null;  // 左指针
  let curr = head;  // 右指针
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev;
}
// @lc code=end

