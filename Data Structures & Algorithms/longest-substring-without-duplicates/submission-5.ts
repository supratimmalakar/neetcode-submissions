class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let map = {};
        let l = 0;
        let r = 0;
        let uniq = 0;
        let max = 0;
        while (r < s.length) {
            map[s[r]] = (map[s[r]] || 0) + 1;
            if (map[s[r]] === 1) uniq++;
            if (map[s[r]] === 2) uniq--;
            if (uniq === r - l + 1) max = Math.max(max, r - l + 1);
            while (r - l + 1 > uniq) {
                map[s[l]] = (map[s[l]] || 0) - 1;
                if (map[s[l]] === 1) uniq++;
                if (map[s[l]] === 0) uniq--;
                l++
            }
            r++
        }
        return max
    }
}
