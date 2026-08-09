class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let dic = {}
        for (let i = 0; i < nums.length ; i++) {
            dic[nums[i]] = (dic[nums[i]] || 0) + 1;
        }
        const entries = Object.entries(dic).sort((a,b) => b[1] - a[1]);
        return entries.slice(0, k).map(x => x[0])
    }
}
