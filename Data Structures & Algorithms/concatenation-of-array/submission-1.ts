class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {

        const n = nums.length;
        let arr = new Array(n * 2);

        for (let i = 0; i < n; i++) {
            arr[i] = nums[i]
            arr[i + n] = nums[i] 
        }

        return arr
    }
}
