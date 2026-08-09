class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0
        if (nums.length === 1) return 1
        nums = nums.sort((a,b) => a - b)
        let length = 0;
        let maxLength = 0;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i - 1] === nums[i]) {
                continue
            }
            if (nums[i - 1] + 1 === nums[i]) {
                length += 1;
            }
            else {
                length = 0
            }
            maxLength = Math.max(maxLength, length)
        }
        return maxLength + 1;
    }
}
