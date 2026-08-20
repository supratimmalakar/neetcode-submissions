class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let r = nums.length - 1;
        let i = 0;
        while (i <= r) {
            if (nums[i] === val) {
                let temp = nums[i]
                nums[i] = nums[r]
                nums[r] = temp;
                r--
            }
            else {
                i++
            }
        }
        return r + 1
    }
}
