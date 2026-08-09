class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0, r = 0;
        let len = 0;
        let map = new Map()
        while (r < s.length) {
           if (map.has(s[r])) {
            l = Math.max(l, map.get(s[r]) + 1)
           }
           map.set(s[r], r)
            len = Math.max(r - l + 1, len)
r++
        }
        return len;
    }
}
