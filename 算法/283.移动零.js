/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * 暴力解法
 * 把找到的不是0的数通通塞进数组里，最后再将剩下的索引都填充0
 */
/* var moveZeroes = function (nums) {
	if (nums.length === 0) { return [] }
	let j = 0
	for (let i = 0; i < nums.length; i++) {
		if(nums[i] !== 0) {
			nums[j++] = nums[i]
		}
	}
	
	for(let i = j; i < nums.length; i++) {
		nums[i] = 0
	}
} */

/**
 * 双指针解法 
 * 相当于把不为0的数一个个放到前面了 只要遇到不为0的交换完 left就会++ 如果为0则不会+ 也就是说left当前的值为0, 一直等到right+到不为0的数后才会交换
 * [0,1,0,3,12]
 * [1,0,0,3,12]
 */
var moveZeroes = function (nums) {
	let left = 0, right = 0
	while(right < nums.length) {
		if(nums[right] !== 0) {
			let temp = nums[left]
			nums[left] = nums[right]
			nums[right] = temp
			left++
		}
		right++
	}
	return nums
}


// @lc code=end

