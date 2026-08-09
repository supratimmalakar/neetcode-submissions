class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        const l2r = new Array(nums.length).fill(0);
        const r2l = new Array(nums.length).fill(0);
        const res = new Array(nums.length).fill(0);


        l2r[0] = nums[0];
        r2l[nums.length - 1] = nums[nums.length - 1];

        for (let i = 1; i < nums.length; i++) {
            let j = nums.length - 1 - i;

            l2r[i] = l2r[i - 1] * nums[i];

            r2l[j] = r2l[j + 1] * nums[j];
        }


        for (let i = 0; i < nums.length; i++) {
            res[i] = (l2r[i - 1] ?? 1) * (r2l[i + 1] ?? 1)
        }

        return res


        



    }
}
