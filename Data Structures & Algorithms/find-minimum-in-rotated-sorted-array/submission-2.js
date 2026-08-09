class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        if (r === l) return nums[l]
        while (l < r) {
            let m = parseInt((r + l)/2)
            console.log({[`num${l}`]: nums[l], [`num${m}`]: nums[m] , [`num${r}`]: nums[r]})
            if (r - l <= 2) return Math.min(...nums.slice(l, r + 1)) 
            if (nums[l] <= nums[m] && nums[m] <= nums[r]) {
                return nums[l]
            }
            else if (nums[m] >= nums[l] && nums[m] > nums[r]) {
                l = m
            }
            else if (nums[m] <= nums[l] && nums[m] < nums[r]) {
                r = m
            }
        }
    }
}
