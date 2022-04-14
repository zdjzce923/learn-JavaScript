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
/* var removeElement = function (nums, val) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			nums.splice(i, 1)
			i--
		}
	}
	return nums.length
}; */

/**
 * 双指针不优化版本
 * 将左边的指针置0 再设置右指针 当右指针值不等于value时 就改变nums[left]的值为 nums[right] 并且让 left 增加，如果右指针的值是val 不能输出到数组里 left 不动
 * 缺点： 如果开头就有要删除的元素 就意味着后面的每个数字都要向前移一位
 */

var removeElement = function (nums, val) {
	let left = 0
	for (let right = 0; right < nums.length; right++) {
		if(nums[right] != val) {
			nums[left] = nums[right]
			left++
		}
	}
	return left
};

/*  */
// @lc code=end

