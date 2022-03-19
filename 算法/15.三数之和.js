/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* 先对数组排序 进行遍历 设置双指针 left right 需考虑： 
 * 1. 数组长度 <3 退出
 * 2. 当前的数如果跟上个数一样 退出
 * 3. 当前遍历数如果>0 说明与后面的和不可能为0 退出
 * 4. right === right[n-1] left === left[n-1] 都应当退出防止重复数组 
 */
const threeSum = function(nums) {
	let result = []
	const length = nums.length
	if(nums == null || length < 3) { return result }
	nums.sort((a,b) => a - b)

	for(let i = 0; i < length; i++) {
		if(nums[i] > 0) break
		let left = i + 1
		let right = length - 1
		if(i > 0 && nums[i] === nums[i-1]) continue
		while(left < right) {
			const sum = nums[i] + nums[left] + nums[right]
			if(sum === 0){ 
				result.push([nums[i], nums[left], nums[right]])
				while (left < right && nums[left] === nums[left+1]) left ++
				while (left < right && nums[right] === nums[right-1]) right --
				left ++
				right --
			}
			else if (sum < 0) left ++
			else if (sum > 0) right --
		}
	}
	return result
};
// @lc code=end

