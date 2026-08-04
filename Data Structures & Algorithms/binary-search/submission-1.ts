class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;

        while (r >= l) {
            const mid = Math.ceil((l + r)/2);

            if (nums[mid] === target) return mid;

            else if (nums[mid] > target) r--
            else if (nums[mid] < target) l++
        }
        return -1
    }
}
