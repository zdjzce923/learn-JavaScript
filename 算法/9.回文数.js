/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
	const forwardList = String(x).split('')
	const reverse = String(x).split('').reverse()
	const result = []
	forwardList.forEach((item, index) => {
		reverse[index] === item ? result.push(true) : result.push(false)
	})

	return result.every( item => item === true)
	
}
// @lc code=end

