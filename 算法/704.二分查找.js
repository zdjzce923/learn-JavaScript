/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分二分 就是给他分两半 再去操作
// [1,2,3,4,5,6]
// 3 > 2  3比目标值大 所以  right = mid - 1 去缩小范围往左边找 right最大值 = 4
// 
var search = function (nums, target) {
  let left = 0, right = nums.length - 1
  while (right >= left) {
    let mid = Math.floor((right - left) / 2 + left)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }
  return -1
};
// @lc code=end

