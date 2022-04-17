/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/* var reverseString = function (s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    let temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left++
    right--
  }
}; */

// 暴力解
var reverseString = function (s) {
  let rightLen = s.length - 1
  for (let i = 0; i < s.length; i++) {
    if (i >= rightLen) { break }
    let temp = s[i]
    s[i] = s[rightLen]
    s[rightLen] = temp
    rightLen--
  }
}

// @lc code=end

