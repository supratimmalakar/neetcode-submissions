class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};
        for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = (map[nums[i]] || 0) + 1
            if (map[nums[i]] > 1) return true
        }
        return false
    }
}
