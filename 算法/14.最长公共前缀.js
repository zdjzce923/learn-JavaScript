/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 * ["flower","flow","flight"]
 */

/**
 * 1. 暴力解法： 抽取第一个字符串当做基准，接着遍历数组及数组中每个字符串的字符，如果遍历的字符与保存的字符串对应索引的值不同 
 * 那么就将他截取到当前遍历的位置。
 */

/* var longestCommonPrefix = function (strs) {
	if (strs.length === 0) {
		return ''
	}
	let str = strs[0]
	for (let str_item of strs) {
		for (let j = 0; j < str.length; j++) {
			if (str[j] !== str_item[j]) {
				str = str.slice(0, j)
			}
		}
	}

	return str
}; */

var longestCommonPrefix = function (strs) {
	if (strs.length === 0) {
		return ''
	}
	let minLength = Number.MAX_SAFE_INTEGER
	// 找出数组中最小长度的字符串
	for (let str of strs) {
		minLength = Math.min(minLength, str.length);
	}

	// 查看传入的middle索引截取的字符串是否跟第一项后的 每一项截取middle索引后的值匹配
	const middleIsMatch = (middle) => {
		let takeMiddleString = strs[0].substring(0, middle)
		for (let i = 1; i < strs.length; i++) {
			let contrastStr = strs[i].substring(0, middle)
			if (takeMiddleString != contrastStr) return false
		}
		return true
	}

	let low = 0, high = minLength;
	while (low < high) {
		// 取[low,high]区间的中间值, 考虑到是二分思想遍历完需要加上之前的low值, 
		let mid = low + ((high - low + 1) >> 1)
		// 如果匹配的话将低位区间替换为mid 接着查看后面的区间。 如果不匹配则要缩短high的区间继续求mid
		middleIsMatch(mid) ? low = mid : high = mid - 1
	}
	return strs[0].substring(0, low)

};
// @lc code=end

