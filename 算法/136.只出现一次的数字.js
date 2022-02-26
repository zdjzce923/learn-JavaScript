/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// [2,2,1]
//  
// ret = ret ^ num
// 
const singleNumber = function(nums) {
	let ret = 0
	nums.forEach((num)=>{
		ret ^= num
	})
	return ret
};
// @lc code=end

