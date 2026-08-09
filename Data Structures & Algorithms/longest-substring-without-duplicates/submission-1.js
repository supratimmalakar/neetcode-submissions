class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map();
        let l = 0
        let length = 0
        for (let r = 0; r<s.length; r++) {
            if (map.has(s[r])) {
                l = Math.max(l, map.get(s[r]) + 1)
            }
            map.set(s[r], r)
            length = Math.max(length, r-l+1)
        }
        return length
    }
}
