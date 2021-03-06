/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 深度优先 将两个数组排序 优先满足最后一个孩子 
 * [1,2] [1,2,3]
 */

const findContentChildren = function (g, s) {
	g.sort((a, b) => a - b)
	s.sort((a, b) => a - b)
	let gLength = g.length, sLength = s.length
	let count = 0
	for (let i = 0, j = 0; i < gLength && j < sLength; i++, j++) {
		while (j < sLength && g[i] > s[j]) {
			j++
		}
		if( j < sLength) {
			count++
		}
	}
	return count
};
// @lc code=end

