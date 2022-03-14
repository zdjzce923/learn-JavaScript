/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// "(){}[]" true 
// {[()]} true
// (([]))  false
// ({)}  false
var isValid = function(s) {
	const map = {
		'{': '}',
		'[': ']',
		'(': ')'
	}
	// 使用栈，后入先出每次push一个跟左边的对比，左边的括号必须跟右边的括号相等，否则不合法。
	let stack = []
	for(let i = 0; i < s.length; i++) {
		const ele = s[i]
		if(ele in map) {
			stack.push(ele)
		} else {
			if(ele != map[stack.pop()]) {
				return false
			}
		}
	}
	return !stack.length
};
// @lc code=end

