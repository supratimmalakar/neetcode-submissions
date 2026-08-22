class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr: number[], k: number, threshold: number): number {

        let sum = 0;
        let count = 0;
        for (let i = 0; i < k; i++) {
            sum += arr[i]
        }
        if ((sum / k) >= threshold) count++

        for (let i = k; i < arr.length; i++) {
            let last = i - k;
            sum = sum + arr[i] - arr[last]
            if ((sum / k) >= threshold) count++
        }

        return count

    }
}
