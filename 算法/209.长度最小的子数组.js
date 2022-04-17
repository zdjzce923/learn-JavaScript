/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * [2, 3, 1, 2, 4, 3]
 *     i
 *              j
 *  暴力解法
 */
/* const minSubArrayLen = function (target, nums) {
  let resultLen = nums.length + 1
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum >= target) {
        let len = j - i + 1
        resultLen = resultLen > len ? len : resultLen
      }
    }
  }
  return resultLen > nums.length ? 0 : resultLen

}; */

/**
 * 双指针解法
 * [2, 3, 1, 2, 4, 3]
 * ↑
 * ↑
 * 设置快慢指针 先加完所有的数 接着判断是否大于等于目标值 大于目标值则比较长度 接着再减去 slow 对应的值 （目的是从左截取元素接着判断 ）
 */
const minSubArrayLen = function (target, nums) {
  let fast = slow = 0
  let resultLen = nums.length + 1
  let sum = 0
  while (fast < nums.length) {
    sum += nums[fast++]
    while (sum >= target) {
      let len = fast - slow
      resultLen = resultLen > len ? len : resultLen
      sum -= nums[slow++]
    }
  }
  return resultLen > nums.length ? 0 : resultLen
}
// @lc code=end

