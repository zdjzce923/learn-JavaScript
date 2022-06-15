/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0, right = x, res = -1
  while (l <= right) {
    let pivot = l + Math.floor((right - l) / 2)
    if (pivot * pivot <= x) {
      l = pivot + 1
      res = pivot
    } else {
      right = pivot - 1
    }
  }
  return res
};
// @lc code=end

