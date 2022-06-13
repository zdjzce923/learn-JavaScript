/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 直接去前后空格 颠倒数组 循环时额外判断遇到空的跳过循环
// 如果不颠倒数组 则要从数组的最后一个开始遍历
/* var reverseWords = function (s) {
  let result = ''
  const stack = s.trim().split(' ').reverse()
  for (let word of stack) {
    if (!word) continue
    if (!result) {
      result += word
    } else {
      result += ' ' + word
    }

  }
  return result
}; */

var reverseWords = function (s) {
  let result = ''
  const stack = s.trim().split(' ')
  for (let i = stack.length; i >= 0; i--) {
    if (!stack[i]) continue
    if (!result) {
      result += stack[i]
    } else {
      result += ' ' + stack[i]
    }

  }
  return result
};
// @lc code=end

