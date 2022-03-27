/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * [1,2,4]  [1,3,4] [1,2,3,4,4]
 * 思路： 递归 或者哨兵
 * 
 * 1 < 1 false merge(1,3) 
 * 1 < 3 true merge(2,3)
 * 2 < 3 true merge(4,3)
 * 4 < 3 false merge(4,4)
 * 4 < 4 false merge(4,4)
 * 4
 * 
 * 归
 * 4 4 3 2 1 1
 */
var mergeTwoLists = function(list1, list2) {
	if(list1 === null) { return list2 }
	if(list2 === null) { return list1 }
	if(list1.val < list2.val) {
		list1.next = mergeTwoLists(list1.next, list2)
		return list1
	} else {
		list2.next = mergeTwoLists(list1, list2.next)
		return list2
	}
}	
;

// @lc code=end

