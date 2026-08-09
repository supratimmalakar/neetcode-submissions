class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0, r = 0;
        let maxLength = 0;
        let maxFreq = 0;
        let map = new Map()
        while (r < s.length) {
          map.set(s[r], (map.get(s[r]) || 0) + 1)
          maxFreq = Math.max(maxFreq, map.get(s[r]))
          while (r - l + 1 - maxFreq > k) {
            map.set(s[l], (map.get(s[l]) || 0) - 1)
            l++
          }
          maxLength = Math.max(maxLength, r - l + 1)
          r++
        }
        return maxLength
    }
}
