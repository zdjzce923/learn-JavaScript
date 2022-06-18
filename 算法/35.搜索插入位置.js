/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * 输入: nums = [1,3,5,6], target = 7
 * [1,3] [5,6]  mid = 2  5 < 7 ?  mid ++ 
 * 输出: 4
 */
// 二分
var searchInsert = function (nums, target) {
  let ans = nums.length
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (target <= nums[mid]) {
      ans = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return ans
};
// @lc code=end

