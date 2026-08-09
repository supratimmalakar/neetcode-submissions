class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
        return false;
    }
    let s1map = new Map()
        for (let i = 0; i < s1.length; i++) {
            s1map.set(s1[i], (s1map.get(s1[i]) || 0) + 1)
        }
        let map = new Map(s1map) 
        let l = 0
        let r = 0;
        while (r < s2.length) {
            // console.log({map, "s2[r]": s2[r], r})
            if (map.has(s2[r])) {
                if (map.get(s2[r]) <= 1) map.delete(s2[r])
                else map.set(s2[r], map.get(s2[r]) - 1)
            }
            else {
                map = new Map(s1map)
                l++
                r = l -1
            }
            if (map.size <= 0) return true
            r++
        }
        return false
    }
}
