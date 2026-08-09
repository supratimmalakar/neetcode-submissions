class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let prevLeft = 0;
        let prevRight = 0;
        let maxHeightLeft = Array(height.length).fill(null)
        let maxHeightRight = Array(height.length).fill(null)
        for (let i = 0; i < height.length; i++) {
            let j = height.length - 1 - i;
            maxHeightLeft[i] = Math.max(prevLeft, height[i])
            maxHeightRight[j] = Math.max(prevRight, height[j])
            prevLeft = maxHeightLeft[i]
            prevRight = maxHeightRight[j]
        }
        let sum = 0
        for (let i = 0; i < height.length; i++) {
            sum += Math.min(maxHeightLeft[i], maxHeightRight[i]) - height[i]
        }
        return sum
    }
}
