/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
/**
 * 皇后棋子在 同一行 同一列 同一斜线上可以进行攻击 如果要满足多个皇后排列不能攻击 
 * 则要满足： col != c  row - col != r - c  row + col != r + c
 */
var solveNQueens = function (n) {
  const path = []
  const res = []

  backTrack(0, path)
  return res

  function backTrack (row, tmp) {
    // 找到最后一行说明都已经找到合适的位置
    if (row === n) {
      res.push(tmp.map(c => {
        const arr = new Array(n).fill('.')
        arr[c] = 'Q'
        return arr.join('')
      }))
    }

    for (let col = 0; col < n; col++) {
      const canNotAdd = tmp.some((c, r) => {
        return c === col || ((r - c) === (row - col)) || ((r + c) === (row + col))
      })

      if (canNotAdd) {
        continue
      }

      backTrack(row + 1, [...tmp, col])
    }
  }
};
// @lc code=end

