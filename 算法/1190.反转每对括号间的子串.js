/*
 * @lc app=leetcode.cn id=1190 lang=javascript
 *
 * [1190] 反转每对括号间的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

/**
 * 使用栈 
 * 如果没碰到括号就拼接字符串
 * 碰到左括号的时候 就将当前拼接的字符串放到栈里
 * 碰到右括号时说明已经到可遍历的最后一个字符串 
 * 此时开始弹出并反转字符串和加上前一个字符串
 */
var reverseParentheses = function (s) {
  let str = ''
  let strStack = []
  for (let singleStr of s) {
    // 一旦等于左括号就直接放入栈里 并将字符串置空
    if (singleStr === '(') {
      strStack.push(str)
      str = ''
    } else if (singleStr === ')') {
      // 等于右括号时将当前的str反转
      str = str.split('').reverse().join('')
      str = strStack[strStack.length - 1] + str
      strStack.pop()
    } else {
      // 默认情况下直接拼接字符串
      str += singleStr
    }
  }
  return str
}
// @lc code=end

