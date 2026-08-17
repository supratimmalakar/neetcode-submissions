/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null, range?: {min: number, max: number}): boolean {
        if (root === null) return true;

        if (!range) range = {min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER};

        const {min, max} = range;

        const isRootInRange = root.val > min && root.val < max;

        if (!isRootInRange) return false;

        const l = this.isValidBST(root.left, {min, max: root.val});
        const r = this.isValidBST(root.right, {min: root.val, max});

        return isRootInRange && l && r;
    }
}
