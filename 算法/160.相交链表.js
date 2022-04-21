/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 1 -> 2 -> 3 -> 4 -> 5  m 
 * 4 -> 3 -> 4 -> 5       n 
 * 
 */

/**
 * 方法1 用集合保存 遍历list2 看看集合中是否有当前值
 */
/* const getIntersectionNode = function (headA, headB) {
  const arr = new Set()
  let temp = headA
  while (temp !== null) {
    arr.add(temp)
    temp = temp.next
  }

  temp = headB
  while (temp) {
    if (arr.has(temp)) {
      return temp
    }
    temp = temp.next
  }
  return null

} */


/**
 * 方法2 双指针设 a 节点的长度为 A，b 节点的长度为 B
 * 如果两个节点相交那么就有相交点 C
 * 也就是说 A + B + C 与 B + A + C 是完全相等的 只要让一个节点走完再走另外一个节点 再到相同的节点上就找到了相交点
 */
const getIntersectionNode = function (headA, headB) {
  let nodeA = headA
  let nodeB = headB
  while (nodeA != nodeB) {
    nodeA = nodeA === null ? headB : nodeA.next
    nodeB = nodeB === null ? headA : nodeB.next
  }
  return nodeA
}
// @lc code=end

