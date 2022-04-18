/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 快慢指针，由于nums为有序数组 这就说明相同的数值是连续的 也就是说 i === j === k
 * 快慢指针为同一起跑线，如果对应的nums数组的值相同 让fast++ 直到两个数不同时，
 * 让slow ++ 目的是为了至少保存一个相同的数字 接着让nums对应的slow索引等于 nums 对应的fast索引 
 * [5,5,5,1,1,1,2,2,2]
 */
const removeDuplicates = function (nums) {
  if (nums.length === 0) return []
  let fast = 0
  let slow = 0
  while (fast < nums.length) {
    if (nums[fast] != nums[slow]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }
  return slow + 1
}
// @lc code=end

