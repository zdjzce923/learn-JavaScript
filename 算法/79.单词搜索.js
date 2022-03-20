/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/**
 * [
 * ["A","B","C","E"],
 * ["S","F","C","S"],
 * ["A","D","E","E"]
 * ] word = "ABCCED"
 * 深度优先 + 回溯：一直找 找的时候将当前的值填为空放置重复找 找不到就回去上下左右四个方向进行搜索
 * 
 */
const exist = function(board, word) {
	if( board.length === 0 ) { return false }
	if( word.length === 0 ) { return true }

	const row = board.length
	const col = board[0].length

	for(let i = 0; i < row; i++) {
		for(let j = 0; j < col; j++) {
			const ret = find(i, j , 0)
			if(ret) { return ret }
		}
	}
	return false

	/**
	 * @param i 横向索引
	 * @param j 纵向索引
	 * @param cur 当前搜索的单词索引
	 */
	function find(i, j, cur) {
		if(i >= row || i < 0) { return false }
		if(j >= col || j < 0) { return false }

		let letter = board[i][j] // 当前值
		if(letter != word[cur]) { return false }
		if(cur == word.length - 1) { return true }  // 最后一个也是匹配的

		board[i][j] = null  // 选择当前的字母置为空
		// 进行四个方向的搜索
		const ret = find(i + 1, j, cur + 1) ||
					find(i - 1, j, cur + 1) ||
					find(i, j + 1, cur + 1) ||
					find(i, j - 1, cur + 1)

		board[i][j] = letter  // 回撤
		return ret
	}
};


// @lc code=end

