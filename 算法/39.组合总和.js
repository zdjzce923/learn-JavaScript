/*
 * @Author: zdjzce923 493904954@qq.com
 * @Date: 2022-06-15 23:05:00
 * @LastEditors: zdjzce923 493904954@qq.com
 * @LastEditTime: 2022-06-16 16:48:54
 * @FilePath: /JavaScript/算法/39.组合总和.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/**
 * 输入：candidates = [2,3,6,7], target = 7
 * 输出：[[2,2,3],[7]]
 */

// 如果数组里头的数字加起来大于 target 就弹出一个数字
var combinationSum = function (candidates, target) {
  const res = []
  const path = []
  candidates.sort()
  backTrack(0, 0)
  return res

  // 上来就是一个 backTrack
  function backTrack (i, sum) {
    // 终止条件
    if (sum > target) {
      return
    }
    if (sum === target) {
      res.push([...path])
    }
    // 循环
    for (let j = i; j < candidates.length; j++) {
      const num = candidates[j];
      if (num + sum > target) continue
      
      path.push(num)
      sum += num
      backTrack(j, sum)
      path.pop()
      sum -= num

    }
  }
};

// @lc code=end
