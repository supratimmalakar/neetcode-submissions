class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let r = matrix.length - 1;
        let arrIdx = 0;
        while (l <= r) {
            let mid = parseInt((r + l) / 2)
            if (target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]) {
                arrIdx = mid
                break;
            }
            else if (target > matrix[mid][matrix[mid].length - 1]) {
                l = mid + 1
            }else {
                r = mid - 1
            }
        }
        const arr = matrix[arrIdx]
        console.log(arrIdx)
        l = 0;
        r = arr.length - 1
        while (l <= r) {
            let mid = parseInt((r + l) / 2)
            console.log({l,r,mid})
            if (target === arr[mid]) return true
            else if (target > arr[mid]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return false
    }
}
