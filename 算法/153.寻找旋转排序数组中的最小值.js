/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/** 
 * 数组经过旋转后 会将前面小的元素放到后面去 例如[5,6,7,1,2,3] 
 * 此时中间值为 7，比最右边的 3 要大。说明我们需要截取中间值后面的数组。 [1, 2, 3] 
 * 假设中间值要比右边的要小 说明后面的数字都比前面的大 直接让截取 0 -> right 区间的数组
 */
// [1,2,8,10,11,21]
var findMin = function (nums) {
  let left = 0, right = nums.length - 1
  while (left < right) {
    // 为什么要加上left 因为求出要的中间值时 这个中间值时区间的索引 直接用肯定不行 是nums的索引
    // 所以得加上左边的偏移量。
    let pivot = left + Math.floor((right - left) / 2)
    if (nums[pivot] < nums[right]) {
      right = pivot
    } else {
      left = pivot + 1
    }
  }
  return nums[left]
};
// @lc code=end

