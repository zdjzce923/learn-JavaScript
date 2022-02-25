/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
const LRUCache = function(capacity) {
	this.max = capacity
	this.cache = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
	if(this.cache.has(key)) {
		const newKeyValue = this.cache.get(key)
		this.cache.delete(key)
		this.cache.set(key, newKeyValue)
		return newKeyValue
	}
	return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
	if(this.cache.has(key)) {
		this.cache.delete(key)
	} else if(this.cache.size >= this.max) {
		this.cache.delete(this.cache.keys().next().value)
	}
	this.cache.set(key,value)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * const obj = new LRUCache(capacity)
 * const param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

