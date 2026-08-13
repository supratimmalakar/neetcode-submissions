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
    diameterOfBinaryTree(root: TreeNode | null): number {
        let max = 0;
        function depthFn(root: TreeNode | null, depth: number): number {
            if (root === null) return depth;


            const leftDepth = depthFn(root.left, depth);
            const rightDepth = depthFn(root.right, depth);

            max = Math.max(max, leftDepth + rightDepth)

            return Math.max(leftDepth, rightDepth) + 1

        }

        depthFn(root, 0)

        return max
    }
}
