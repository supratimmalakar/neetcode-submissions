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
     * @return {number}
     */
    goodNodes(root: TreeNode | null, max?: number): number {
        if (root === null) return 0;

        let isGood = false;

        if (max) {
            if (root.val >= max) isGood = true
            max = Math.max(max, root.val)
        }
        else {
            isGood = true
            max = root.val
        }

        const leftCount = this.goodNodes(root.left, max);
        const rightCount = this.goodNodes(root.right, max);

        return leftCount + rightCount + (isGood ? 1 : 0)


    }
}
