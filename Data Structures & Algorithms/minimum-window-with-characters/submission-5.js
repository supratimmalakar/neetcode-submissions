class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return ""
        let mapt = new Map()
        for (let i = 0; i < t.length; i++) {
            mapt.set(t[i], (mapt.get(t[i]) || 0) + 1)
        }
        let ans = "", finalAns = ""
        let map = new Map(mapt)
        const reduce = (key) => {
            if (map.has(key)) {
                if (map.get(key) > 1) map.set(key, map.get(key) - 1)
                else map.delete(key)
            }
        }
        let l = 0
        for (let i = 0; i < s.length; i++) {
            console.log({map, i})
            if (map.has(s[i])) {
                if (!ans) {
                    l = i
                }
                ans+=s[i]
                reduce(s[i])
            }
            else {
                if (ans.length >= 1) {
                    ans+=s[i]
                }
            }
            if (map.size <= 0) {
                map = new Map(mapt)
                if (finalAns) {
                    finalAns = finalAns.length > ans.length ? ans : finalAns;   
                } else {
                    finalAns = ans
                }
                ans = ""
                l++
                i = l - 1
                while (!map.has(s[l]) && l < s.length - 1) {
                    l++
                    i = l - 1
                }
            }
        }
        if (finalAns.length < t.length) return ""
        return finalAns
    }
}
