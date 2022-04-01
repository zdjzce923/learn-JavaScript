/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * 深度优先，给个长度值，将每次的数据值更新到长度值上 看每个数字能跳的最大长度，当前值能跳的长度应该是当前索引+值。
 * 
 * 最后如果这个值的位置能够到数组的最后一个 就是 true
 * [2,3,1,1,4]
 * 从索引 0 开始跳，值为 2，接着到下个索引 1，索引 1 的值为 3，那么索引 1 能跳的最大长度就为 4。因为索引0的值是2，能跳两步儿索引1正好在覆盖范围内。
 */
const canJump = function(nums) {
	let thresHold = 0
	for(let i = 0; i <= thresHold; i++) {
		thresHold = Math.max(thresHold, i + nums[i])
		if(thresHold >= nums.length - 1) {
			return true
		}
	}
	return false
};
// @lc code=end

