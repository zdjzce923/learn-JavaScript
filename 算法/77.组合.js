/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

/**
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * 你可以按 任何顺序 返回答案。
 */


var combine = function (n, k) {
  let res = []
  let arr = []
  dfs(n, k, arr, 1, res)
  return res
}

function dfs (n, k, arr, start, res) {
  if (k === 0) {
    return res.push([...arr])
  }
  for (let i = start; i <= n; i++) {
    arr.push(i)
    dfs(n, k - 1, arr, i + 1, res)
    arr.pop()
  }
}

// @lc code=end

/**
 * n = 4 k = 2 j = 1
 */
/**
 * 输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/