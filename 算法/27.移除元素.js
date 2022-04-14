/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * [1,2,5,2,5,3,5] 5
 */

/* 简单解法 */
var removeElement = function (nums, val) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			nums.splice(i, 1)
			i--
		}
	}
	return nums.length
};


/*  */
// @lc code=end

