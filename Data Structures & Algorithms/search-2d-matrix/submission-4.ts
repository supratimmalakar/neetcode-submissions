class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;

        while (r >= l) {
            const mid = Math.ceil((l + r)/2);

            if (nums[mid] === target) return mid;

            else if (nums[mid] > target) r = mid - 1;
            else if (nums[mid] < target) l = mid + 1
        }
        return -1
    }

    searchMatrix(matrix: number[][], target: number): boolean {
        let l = 0;
        let r = matrix.length - 1;
        while (r >= l) {
            const mid = Math.ceil((l+r)/2);

            const midArr = matrix[mid];

            if (target >= midArr[0] && target <= midArr[midArr.length - 1]) return this.search(midArr, target) !== -1;

            if (target > midArr[midArr.length - 1]) l = mid + 1
            if (target < midArr[0]) r = mid - 1
        }

        return false
    }
}
