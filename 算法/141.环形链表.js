/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
const hasCycle = function(head) {
	/* //  1. 暴力解法 每次循环如果Set对象里没有包含已经有的next节点，则添加，否则return true。没有下个节点则return false
	let cache = new Set()

	while(head) {
		if(cache.has(head)) { 
			return true
		} else {
			cache.add(head)
		}
		head = head.next
	}
	return false
	*/
	//  2. 双指针 拿两个指针去跑 快的指针肯定会套圈遇上慢的指针
	let fast = head
	let slow = head
	while(fast && fast.next) {
		fast = fast.next.next
		slow = slow.next
		if( fast === slow ) {
			return true
		}
	}
	return false
};
// @lc code=end

