/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
	//  将 n-1 获得与n相反的二进制数再进行and运算 如果完全等于0说明满足条件
	return n > 0 && (n & n-1) === 0
};
// @lc code=end

