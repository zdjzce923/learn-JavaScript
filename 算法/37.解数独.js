/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/**
 * 
 * @param {*} board 
 * [
 * ["5","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 */
// 以行为单位 直接遍历到单个数字
var solveSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != '.') continue
      for (let k = 1; k <= 9; k++) {
        //  判断能不能放
        if (isValid(board, i, j, k)) {
          board[i][j] = k
          if (solveSudoku(board)) return true
          board[i][j] = '.'
        }
      }
      return false
    }
  }
  return true
}
// @lc code=end

function isValid (board, row, col, k) {
  // 查看一行一列上有无相同的值
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === k || board[i][col] === k) return false
  }

  // 查看九宫格有无相同的值
  let x = Math.floor(row / 3) * 3
  let y = Math.floor(col / 3) * 3
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[x + i][y + j] === k) return false
    }
  }

  return true
}