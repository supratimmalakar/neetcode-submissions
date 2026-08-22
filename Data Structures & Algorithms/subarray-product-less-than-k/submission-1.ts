class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums: number[], k: number): number {
        let count = 0;
        let l = 0;
        let r = 0;

        let product = 1;

        while (r < nums.length) {
            product = product * nums[r];
            while (product >= k && l <= r) {
                product = product / nums[l];
                l++
            }

            count = count + r - l + 1
            r++
        }

        return count
    }
}
