class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0;
        let r = 0;

        let maxLength = 0;

        let dict = {[s[0]]: 1};

        while (r < s.length) {
            if (dict[s[r]] > 1) {
                if (dict[s[l]] !== undefined && dict[s[l]] > 0) {
                    dict[s[l]] = dict[s[l]] - 1
                }
                l = l + 1;
            } else {
                maxLength = Math.max(maxLength, r - l + 1)
                r = r + 1
                dict[s[r]] = (dict[s[r]] || 0) + 1
            }
          
        }

        return maxLength;
    }
}
