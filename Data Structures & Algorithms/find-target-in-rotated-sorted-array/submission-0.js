class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            let mid = parseInt((l + r)/2)
            if (nums[mid] === target) return mid;
            // console.log({[`nums${l}`]: nums[l], [`nums${mid}`]: nums[mid], [`nums${r}`]: nums[r]})
            let isNonRotated = nums[mid] >= nums[l] && nums[mid] <= nums[r]
            if (isNonRotated) return bs(nums, target, l, r)
            let isLeftSorted = nums[mid] >= nums[l];
            if (isLeftSorted) {
                if (target >= nums[l] && target <= nums[mid]) {
                    r = mid - 1
                }
                else {
                    l = mid + 1
                }
            }
            else {
                if (target >= nums[mid] && target <= nums[r]) {
                    l = mid + 1
                }
                else {
                    r = mid - 1
                }
            }
        }
        return -1

    }
}

const bs = (nums, target, l, r) => {
    while (l <= r) {
        let mid = parseInt((l + r)/2)
        if (target === nums[mid]) return mid
        else if (target > nums[mid]) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return -1
}
