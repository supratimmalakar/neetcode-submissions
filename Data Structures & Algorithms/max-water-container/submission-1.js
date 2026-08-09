class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let maxVol = 0;
        while (r > l) {
            let vol = (r-l) * Math.min(heights[l], heights[r])
            maxVol = Math.max(vol, maxVol)
            if (heights[l] > heights[r]) {
                r--
            }
            else {
                l++
            }
        }
        return maxVol
    }
}
