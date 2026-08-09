class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = Array.from({ length: nums.length + 1 }, () => []);
        const dict: {[k: number]: number} = {};
        for (let i = 0; i < nums.length; i++) {
            dict[nums[i]] = (dict[nums[i]] || 0) + 1;
        }
        Object.entries(dict).forEach(i => {
            const [num,freq] = i;
            freqMap[Number(freq)].push(Number(num))
        });

        let res = [];
        let i = freqMap.length - 1
        while (res.length < k && i >= 0) {
            freqMap[i].forEach(num => {
                if (res.length < k) res.push(num)
            })
            i--;
        }
        return res
    }
}
