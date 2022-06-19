/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 二分
// [5,7,7,8,8,10]
//  会存在 [2, 2] 的情况， 应该把数组劈成两半 去分别找对应的元素
//nums = [5,7,7,8,8,10], target = 8
var searchRange = function (nums, target) {
  let left = 0, right = nums.length - 1, mid;
  while (left <= right) { // 二分查找target
    mid = (left + right) >> 1;
    if (nums[mid] === target) break;
    if (nums[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  if (left > right) return [-1, -1];
  let i = mid, j = mid;
  while (nums[i] === nums[i - 1]) i--;//向左尝试找相同的元素
  while (nums[j] === nums[j + 1]) j++;//向右尝试找相同的元素
  return [i, j];
};
// @lc code=end

