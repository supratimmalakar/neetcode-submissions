class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let length = 0
        let map = new Map()
        let l = 0
        let maxf = 0;
        for (let r = 0; r < s.length; r++) {
            map.set(s[r], (map.get(s[r]) || 0) + 1)
            maxf = Math.max(maxf, map.get(s[r]))
            if (r - l + 1 - maxf <= k) {
                length = Math.max(length, r - l + 1)
            }
            else {
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }
        }
        return length;
    }
}
