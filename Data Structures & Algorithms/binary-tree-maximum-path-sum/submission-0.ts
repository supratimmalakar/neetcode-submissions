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
    maxPathSum(root: TreeNode | null): number {
        let max = -Infinity;
        function r(root: TreeNode | null): number {
            if (root === null) return 0;

            const left = Math.max(r(root.left), 0);
            const right = Math.max(r(root.right), 0);

            max = Math.max(max, left + right + root.val)


            return Math.max(left, right) + root.val

            
        }

        r(root)


        return max;


    }
}
