/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 暴力解法
/* var sortedSquares = function (nums) {
  let powNum = []
  for (let i = 0; i < nums.length; i++) {
    powNum.push(Math.pow(nums[i], 2))
  }
  powNum.sort((a, b) => a - b)
  return powNum
}; */

// 双指针解法 每次拿头元素和尾元素进行对比，将大的放入数组中 并且将范围缩短 数组长度缩短 如果刚开始的负数都比最大的正数大 他就是最大的
var sortedSquares = function (nums) {
  let powNum = []
  let n = nums.length
  for (let i = 0, j = n - 1, powIndexMax = n - 1; i <= j;) {
    if (nums[i] * nums[i] > nums[j] * nums[j]) {
      powNum[powIndexMax] = nums[i] * nums[i]
      i++
    } else {
      powNum[powIndexMax] = nums[j] * nums[j]
      j--
    }
    powIndexMax--
  }
  return powNum
}


// @lc code=end

