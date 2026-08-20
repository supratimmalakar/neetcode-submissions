class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        let cnt1 = new Array(26).fill(0);
        let cnt2 = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            let c1 = s.charCodeAt(i) - 97
            let c2 = t.charCodeAt(i) - 97

            cnt1[c1] = cnt1[c1] + 1;
            cnt2[c2] = cnt2[c2] + 1;
        }

        for (let i = 0; i < 26; i++) {
            if (cnt1[i] !== cnt2[i]) return false
        }

        return true


    }
}
