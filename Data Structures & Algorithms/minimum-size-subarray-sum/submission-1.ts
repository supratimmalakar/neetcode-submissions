class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let l = 0;
        let r = 0;

        let min;
        let sum = 0;

        while (r < nums.length) {
            sum += nums[r];
            while (sum >= target) {
                min = min ? Math.min(min, r - l + 1) :r - l + 1;
                sum -= nums[l];
                l++
            }
            r++
        }
        return min ?? 0
    }
}
