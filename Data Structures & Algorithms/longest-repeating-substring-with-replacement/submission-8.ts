class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    
    characterReplacement(s: string, k: number): number {
        let maxLength = 0;
        let l = 0;
        let r = 0;
        let dict = {[s[0]]: 1};
        let max = 1;
        while (r < s.length) {
            if (k < (r - l + 1 - max)) {
                dict[s[l]] = Math.max(0, (dict[s[l]] || 0) - 1);
                l++
            } else {
                maxLength = Math.max(maxLength, r - l + 1)
                r++
                dict[s[r]] = (dict[s[r]] || 0) + 1;
                max = Math.max(dict[s[r]], max)
            }
        }

        return maxLength;
    }
}
