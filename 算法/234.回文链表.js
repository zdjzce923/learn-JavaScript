/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 * 输入：head = 1 2 2 1 2 2 1 输出：true   
 *            ↑
 *            ↑
 *            ↑
 */

/**
 * 方法1 将节点都放入数组 再用双指针进行判断
 */
/* var isPalindrome = function (head) {
  let arr = []
  while (head !== null) {
    arr.push(head.val)
    head = head.next
  }
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) { 
    if(arr[i] != arr[j]) {
      return false
    }
  }
  return true
}; */

/**
 * 方法2 递归到尾结点后与头结点进行对比 如果不等则return false 等于则将头节点换成next
 */
/* let frontPointer

const contrastNode = (curNode) => {
  if (curNode !== null) {
    if (!contrastNode(curNode.next)) return false
    if (frontPointer.val !== curNode.val) return false
    frontPointer = frontPointer.next
  }
  return true
}

const isPalindrome = function (head) {
  frontPointer = head
  return contrastNode(frontPointer, head.next)
} */

/**
 * 方法3 双指针 
 * 链表的中间节点 + 反转链表
 * 将左指针节点链表反转 再进行对比
 */
var isPalindrome = function (head) {
  let slow = fast = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  // 考虑到偶数链表 例如1 -> 2 -> 2 -> 1 的中间节点为倒数第二个2 需要带上slow节点本身
  // 奇数链表 例如  1 -> 2 -> 1  的中间节点为2 截取后的链表为 1   1  不需要带上slow节点
  // 判断是否是偶数链表 遍历完的fast是null 因为去除掉头结点剩下的节点就是奇数 到最后自然是null
  const isOddNumber = fast != null
  const secondStart = isOddNumber ? slow.next : slow
  let node1 = reverseNodeList(head, slow)
  let node2 = secondStart

  while (node1) {
    if (node1.val != node2.val) {
      return false
    }
    node1 = node1.next
    node2 = node2.next
  }
  return true
}

const reverseNodeList = (head_node, pivot_node) => {
  let cache = null, cur = head_node
  while (cur != pivot_node) {
    let next = cur.next
    cur.next = cache
    cache = cur
    cur = next
  }
  return cache
}

// @lc code=end

