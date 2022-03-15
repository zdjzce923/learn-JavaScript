/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function(path) {
	/*  /a/./b/../../c/    以 / 开头,不能以 / 结尾。// 视为 /, 剔除 .. . 得到规范路径。 */
	// 使用栈，以 / 分割
	let stack = [] 
	let splitArr = path.split('/')
	for (let i = 0; i < splitArr.length; i++) {
		const p = splitArr[i]
		if(p == '..') {
			stack.pop()
		} else if(p && p != '.') {
			stack.push(p)
		}
	}
	return '/' + stack.join('/')
};
// @lc code=end

