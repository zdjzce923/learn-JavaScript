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
// ((([]))  false
// ({)}  false
var isValid = function(s) {
	const map = {
		'{': '}',
		'[': ']',
		'(': ')'
	}
	// 使用栈，将匹配的左括号全部入栈，右括号不入栈，弹出栈的最后一个元素与右括号进行对比，相等则合法。
	// 若入栈的元素都找到对应的反括号，那么最后的栈应该为空。
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

