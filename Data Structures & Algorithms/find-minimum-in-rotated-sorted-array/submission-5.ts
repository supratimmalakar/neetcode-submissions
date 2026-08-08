class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let l = 0;
        let r = nums.length - 1;
        let m = Math.ceil((l+r)/2);
        if (nums[l] <= nums[r]) return nums[l]
        while (m !== r) {
            if ((nums[m] > nums[l]) && (nums[m] > nums[r])) {
                l = m;
            }
            if ((nums[m] < nums[l]) && (nums[m] < nums[r])) {
                r = m;
            }

            m = Math.ceil((l+r)/2)
        }

        return nums[m];
    }
}
