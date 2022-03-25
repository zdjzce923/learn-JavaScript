/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

/**
 * 思路1：使用对象存储单个字母 每个字母只对应一个单词 如果已经存在的字母的值和当前遍历的不同则不对称 return false
 * abba   dog fish fish fish
 * {a: dog, b: fish }  hash[a] != fish
 */

/** 
 * 思路2：双射思想 一个字母只对应一个单词 一个单词只对应一个字母 
 * 如果找到的字母对应的单词/(单词对应的字母) 与当前找到的单词/字母不匹配 则return false
 */

 const wordPattern = function(pattern, s) {
	if(pattern.length < 1) { return false }

	const patternArray = pattern.split('')
	const sArr = s.split(' ')
	if(patternArray.length !== sArr.length) { return false }

	const patternHash = {}
	const wordHash = {}

	for(let i = 0; i < patternArray.length; i++) {
		if(patternArray[i] in patternHash && patternHash[patternArray[i]] != sArr[i]) { return false }
		if(sArr[i] in wordHash && wordHash[sArr[i]] != patternArray[i]) { return false }
			patternHash[patternArray[i]] = sArr[i]
			wordHash[sArr[i]] = patternArray[i]
	}

  return true
};


// @lc code=end

