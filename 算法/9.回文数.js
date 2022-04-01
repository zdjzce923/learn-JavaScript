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
	return forwardList.every( (item,index) => item === reverse[index])
	
}

// 121
/**
 * result 1 num 12
 * result 12 num 1
 * 
*/

/* var isPalindrome = function(x) {
	if (x < 0) {
		return false
	}
	let num = x
	let result = 0
	while (num > 0) {
		result = result * 10 + num % 10
		num = Math.floor(num / 10)
	}
	return result === x
} */
// @lc code=end

