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
    maxDepth(root: TreeNode | null): number {
        function depthFn (root: TreeNode | null, depth: number):number {
            if (root === null) return depth;
            const leftDepth = depthFn(root.left, depth);
            const rightDepth = depthFn(root.right, depth);

            return Math.max(leftDepth, rightDepth) + 1
        }

        return depthFn(root, 0);
    }
}
