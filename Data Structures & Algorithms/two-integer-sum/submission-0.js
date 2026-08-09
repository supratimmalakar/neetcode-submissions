class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let dic = {}
        for (let i = 0; i < nums.length; i++) {
            if (dic[nums[i]] !== undefined) {
                return [dic[nums[i]], i]
            }
            let diff = target - nums[i];
            dic[diff] = i;
        }
        return []
    }
}
