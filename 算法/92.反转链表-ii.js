/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * 输入：head = [1,2,3,4,5], left = 2, right = 4
 * 输出：[1,4,3,2,5]
 *  2 -> 3 -> 4
 * null 2 <- 3 <- 4
 */
/**
 * 方法 1
 * 反转 left 和 right 之间的节点，再把左节点的上一个节点指向反转后的 right
 * 最后把反转后的左节点指向保存的right的下个节点
 */

/* const reverseBetween = function (head, left, right) {
  let dummyNode = {
    next: head
  }

  let pre = dummyNode  // 找到left左边的节点
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next
  }

  // 找到 right 节点和 left 节点
  let rightNode = pre, leftNode = pre.next
  for (let j = 0; j < right - left + 1; j++) {
    rightNode = rightNode.next
  }

  // 保存右节点的下一个节点
  let rightNodeNext = rightNode.next

  // 断开左右节点的链接
  rightNode.next = null
  pre.next = null

  reverseNodeList(leftNode)   // 5 4 3 2

  // 连接节点
  leftNode.next = rightNodeNext
  pre.next = rightNode

  return dummyNode.next
}

//  2 3 4 5
const reverseNodeList = (head) => {
  let pre = null
  let cur = head

  while (cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
} */


/**
 * 找到左节点的上个节点 遍历左右节点的区间
 * 将 当前节点的下个节点拎出来 当前节点的下个节点变为原来的下下个节点   1 2 3 4  -> 1 3 4
 * 将拎出来的节点的下个节点连接当前节点   2 -> 1 3 4
 * 最后在更改左节点的上一个节点的next    pre 2 1 3 4
 */
const reverseBetween = function (head, left, right) {
  const dummyNode = {
    next: head
  }

  // 找到左节点的上个节点
  let pre = dummyNode
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next
  }
  // 1 2 3 4    2 1 3 4    3 2 1 4   4 3 2 1
  // 遍历左右节点区间
  let cur = pre.next  // 1
  for (let j = 0; j < right - left; j++) {
    let next = cur.next   // 2
    cur.next = next.next  // 1 3 4
    next.next = pre.next // 2 1 3 4
    pre.next = next // pre  2 1 3 4
  }

  return dummyNode.next
}
// @lc code=end

