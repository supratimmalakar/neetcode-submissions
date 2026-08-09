class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let dict = {};
        for (let i = 0; i < nums.length; i ++) {
            if (dict[nums[i]] !== undefined) return true;
            dict[nums[i]] = (dict[nums[i]] || 0) + 1;
        }
        return false
    }
}
