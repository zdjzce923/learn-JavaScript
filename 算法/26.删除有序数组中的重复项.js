/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
	for(var i=0; i<nums.length; i++){
		for(var j=i+1; j<nums.length; j++){
			if(nums[i]==nums[j]){         //第一个等同于第二个，splice方法删除第二个
				nums.splice(j,1);
				j--;
			}
		}
	}
return nums;
};
// @lc code=end

