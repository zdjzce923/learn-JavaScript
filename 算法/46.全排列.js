/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * 使用递归 将第一个值先放入 再将后面的值依次放入 需要保存后面已经放入的值 下次不再放同样的 每次循环后需删除已放入的值
 * @param list 保存结果的数组
 * @param temp 排列数组
 * @param nums 当前遍历的数组
 */
function backStack(list, temp, nums) {
	
	if(temp.length === nums.length) { return list.push([...temp])}

	for(let i = 0; i < nums.length; i++) {
		if(temp.includes(nums[i])) continue
		temp.push(nums[i])
		backStack(list, temp, nums)
		temp.pop()
	}

}

const permute = function(nums) {
	let list = []
	backStack(list, [], nums)

	return list
};
// @lc code=end

