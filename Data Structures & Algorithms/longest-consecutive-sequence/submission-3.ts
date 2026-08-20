class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let map = {};

        let longest = 0;

        for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = i
        }

        for (let i = 0; i < nums.length; i++) {
            if (map[nums[i] - 1] === undefined) {
                let length = 1;
                let curr = nums[i] + 1;
                while (map[curr] !== undefined) {
                    length++
                    curr++
                }
                longest = Math.max(longest, length)
            } 
        }

        return longest
    }
}
