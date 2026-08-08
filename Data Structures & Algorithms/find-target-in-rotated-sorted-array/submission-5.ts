class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;
        let m = Math.ceil((l+r)/2);
        
        while (m !== r) {
            if (nums[m] === target) return m;
            const isLeftSorted = nums[m] > nums[l];
            const isRightSorted = nums[m] < nums[r];

            const isInLeft = target >= nums[l] && target < nums[m];
            const isInRight = target > nums[m] && target <= nums[r];

            if (isLeftSorted) {
                if (isInLeft) {
                    r = m
                } else {
                    l = m
                }
            } 

            if (isRightSorted) {
                if (isInRight) {
                    l = m;
                } else {
                    r = m;
                }
            }

            m = Math.ceil((l+r)/2)
        }

        if ((m === r) && (nums[r] === target) ) return r;
        if ((m === r) && (nums[l] === target) ) return l;

        return -1;
    }
}
