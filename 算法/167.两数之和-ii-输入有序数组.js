/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 双指针 设置左右指针 查看大小是否等于目标值 在依次判断比目标值大和小的情况
 * [2,7,11,15]
 */
var twoSum = function (numbers, target) {
  let left = 0, right = numbers.length - 1, numbersLen = numbers.length
  while (left <= right) {
    let sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum > target) {
      right--
    } else {
      left++
    }

  }
};
// @lc code=end

