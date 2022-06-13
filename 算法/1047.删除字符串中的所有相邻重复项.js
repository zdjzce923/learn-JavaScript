/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = []
  for (let letter of s) {
    if (stack[stack.length - 1] === letter) {
      stack.pop()
    } else {
      stack.push(letter)
    }
  }
  return stack.join('')
};
// @lc code=end

