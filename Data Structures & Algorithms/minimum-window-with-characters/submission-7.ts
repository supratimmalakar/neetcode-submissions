class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {

        const map = {};

        for (let i = 0; i < t.length; i++) {
            map[t[i]] = (map[t[i]] || 0) + 1;
        }

        const distinctLetters = Object.values(map).length;
        let matches = 0;

        const possibleAns = []

        let l = 0;
        let r = 0;

        while (r < s.length) {
            if (map[s[r]] !== undefined) {
                map[s[r]] = map[s[r]] - 1;
                if (map[s[r]] === 0) matches++
            }

            if (matches !== distinctLetters) {
                r++
            } else {
                while (matches === distinctLetters) {
                    possibleAns.push(s.slice(l, r+1))
                    if (map[s[l]] !== undefined) {
                        if (map[s[l]] === 0) matches--
                        map[s[l]] = map[s[l]] + 1
                    }
                    l++
                }
                r++
            }
        }
        if (possibleAns.length === 1) return possibleAns[0]
        if (possibleAns.length > 0) {
            let idxOfShortest = 0;
            for (let i = 0; i < possibleAns.length; i++) {
                if (possibleAns[i].length < possibleAns[idxOfShortest].length) idxOfShortest = i
            }
            return possibleAns[idxOfShortest];
        }
        return ""
    }
}
