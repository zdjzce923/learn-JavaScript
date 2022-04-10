/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * [1,2,5]  11  
 * 可以得出公式 当前的总金额 - 当前的硬币面额 + 1 = 剩下所需的硬币值
 * 硬币值为1时 fn(11) = f(10) + 1
 * 硬币值为2时 fn(11) = f(9) + 1
 * 硬币值为5时 fn(11) = f(6) + 1
 * 
 * 动态规划
 */
const coinChange = (coins, amount) => {
	if (!amount) {
		return 0
	}

	let dp = Array(amount + 1).fill(Infinity)
	dp[0] = 0

	for (let i = 0; i < coins.length; i++) {
		for (let j = coins[i]; j <= amount; j++) {
			dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j])
		}
	}

	return dp[amount] === Infinity ? -1 : dp[amount]
}
// @lc code=end

