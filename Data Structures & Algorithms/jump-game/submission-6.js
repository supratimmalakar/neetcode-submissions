class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if (nums.length === 1) return true
        let r = nums.length - 2;
        let nextVisit = r + 1;
        while (r >= 0) {
            while (nums[r] === 0) {
                r--
            }
            if (nums[r] >= nextVisit - r) {
                if (r === 0) return true
                nextVisit = r
                r--
            } else {
                r--
            }
        }
        return false
    }
}
