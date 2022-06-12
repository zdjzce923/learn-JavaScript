/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
/**
 *  2 1 
 *  == + ?
 *  2 pop 1 pop  2 + 1 = 3  push 3
 *  3 3 
 *  == * ? 
 *  3 * 3 = 9 push 9
 * 
 *  4 13 5
 *  == / ? 
 *  13 pop 5 pop 13 / 5 = 2  push 2
 *  4 5
 *  == + ? 
 *  4 pop 5 pop 4 + 5 = 9    push 9
 */
var evalRPN = function (tokens) {
  const stack = []
  for (let numOrOperator of tokens) {
    if (isNaN(numOrOperator)) {
      const num1 = stack.pop()
      const num2 = stack.pop()
      if (numOrOperator == '/') {
        stack.push(parseInt(num2 / num1))
      } else if (numOrOperator == '-') {
        // -5--2 会提示运算符error 需要额外判断 使用 eval 直接计算拼接后的数字跟运算符
        stack.push(num2 - num1)
      } else {
        stack.push(eval(num2 + numOrOperator + num1))
      }
    } else {
      stack.push(numOrOperator)
    }
  }
  return stack[0]
};
// @lc code=end

