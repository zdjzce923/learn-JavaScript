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
let frontPointer

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
}

/**
 * 方法3 双指针 右指针始终比左指针多移一位 右指针到最后的时候左指针正好在中间位置
 * 将左指针节点链表反转 再进行对比
 */
/* var isPalindrome = function (head) {

}
 */
// @lc code=end

