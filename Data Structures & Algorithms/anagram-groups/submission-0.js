class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let dic = {}
        for (let i = 0; i < strs.length; i++) {
            const sorted = [...strs[i]].sort().join('');
            if (dic[sorted]) {
                dic[sorted] = [...dic[sorted], strs[i]]
            }
            else {
                dic[sorted] = [strs[i]]
            }
        }
        return Object.values(dic)


    }
}
