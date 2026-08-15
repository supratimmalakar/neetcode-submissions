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
    isBalanced(root: TreeNode | null): boolean {
        let isNotBalanced = false;
        function depthFn(root: TreeNode | null): {left: number, right: number} {
            if (root === null) return {left: 0, right: 0};

            const ld = depthFn(root.left)
            const rd = depthFn(root.right)

            if (Math.abs(Math.max(ld.left, ld.right) - Math.max(rd.left, rd.right)) > 1) isNotBalanced = true;

            return {left: ld.left + 1, right: rd.right + 1}
        }
        depthFn(root);
        return !isNotBalanced
    }
}
