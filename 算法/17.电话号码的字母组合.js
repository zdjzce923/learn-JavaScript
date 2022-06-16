/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// 回溯就是暴力解 设定好退出条件接着递归
var letterCombinations = function (digits) {
  if (!digits) return []
  const len = digits.length
  const arr = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

  if (len === 1) {
    return arr[digits].split('')
  }

  const res = []
  const path = []
  backTrack(digits, len, 0)
  return res

  function backTrack (digits, len, i) {
    if (path.length === len) {
      res.push(path.join(''))
      return
    }
    for (const j of arr[digits[i]]) {
      path.push(j)
      backTrack(digits, len, i + 1)  // 去递归 满足条件后会将符合长度的数组直接丢进res 完毕后将后加入的弹出 接着进行下次遍历
      path.pop()
    }
  }

};
// @lc code=end

