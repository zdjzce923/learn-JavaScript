/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
	/* 
	// 1. 递归使每个节点对val进行对比
	if(!head) {
		return head
	}
	head.next = removeElements(head.next, val)
	return head.val === val ? head.next : head
	*/
	// 2. 添加哨兵  哨兵 => 1 => 2 => 3 => 4
	const ele = { 
		next: head
	}
	let p = ele

	while(p.next) {
		p.next.val === val ? p.next = p.next.next : p = p.next
	}

	return ele.next
};
// @lc code=end

