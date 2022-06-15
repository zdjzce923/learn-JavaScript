/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 最长递增子序列 找出从左到右递增的子序列 可以是不连续的 例如
 * [2,1,3,6,4,1,8]
 * [1,1,1,1,1,1,1]
 * [1,1,2,3]
 * 最长递增子序列为 [2,3,6,8] 长度为 4
 * 遍历数组 把nums[i]当做是截取长度的最后一位 再去跟前面的每一个数字进行对比 比前面的某个值大则长度+1
 */
const lengthOfLIS = function (nums) {
  if (nums.length === 0) {
    return 0
  }

  let dp = [1]
  let maxLen = 1

  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
    maxLen = Math.max(maxLen, dp[i])
  }

  return maxLen
};

// @lc code=end

