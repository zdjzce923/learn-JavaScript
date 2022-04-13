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
	if (strs == null || !strs.length) return "";
	// 字符串数组中最短字符串的长度
	let minLength = Number.MAX_SAFE_INTEGER;
	for (let str of strs) {
		minLength = Math.min(minLength, str.length);
	}


	/* index之前是否是公共前缀  比方说strs = ["flower", "flow", "flight"] index=2，就是查看前2位 fl是否是公共前缀，结果返回true */
	const isCommonPrefix = (index) => {
		let str0 = strs[0].substring(0, index);
		let n = strs.length;
		for (let i = 1; i < n; i++) {
			// 判断每个字符串的长度为 index 的前缀是否相同
			let str = strs[i];
			if (str0 != str.substring(0, index)) return false;
		}
		return true;
	};
	['aaaa','aaaaa','aaaaa','aaaaaaaa']

	// 左闭右开区间
	let low = 0,
		high = minLength;
	while (low < high) {
		// 为什么这里要用(high - low + 1)呢，+1是为了能够选择到需要的字符上 比如第一轮mid为2且字符串匹配，最小长度为4，下一轮需要的字符串就为3，
		let mid = low + ((high - low + 1) / 2);
		// 如果在前半段里面有公共前缀的话，再往后查找是否有符合条件的，因为我们现在要求的是最长公共前缀
		if (isCommonPrefix(mid)) low = mid;
		// 如果前半段不是公共前缀那我们就再缩小范围再查找，也就是在左半段的左半段里面查
		else high = mid - 1;
	}
	return strs[0].substring(0, low);
	
};
// @lc code=end

